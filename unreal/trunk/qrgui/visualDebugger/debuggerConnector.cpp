#include <QFile>
#include <QtCore/QSettings>

#include "debuggerConnector.h"

using namespace qReal;

DebuggerConnector::DebuggerConnector():
	mThread(new QThread()),
	mDebuggerProcess(new QProcess(this)),
	mBuilderProcess(new QProcess(this)),
	mDebuggerPath("gdb.exe"),
	mBuilderPath("gcc.exe"),
	mBuildedFileName("builded.exe"),
	mHasGccError(false)
{
	moveToThread(mThread);
	connect(mDebuggerProcess, SIGNAL(readyReadStandardOutput()), this, SLOT(readOutput()));
	connect(mDebuggerProcess, SIGNAL(readyReadStandardError()), this, SLOT(readErrOutput()));
	connect(mBuilderProcess, SIGNAL(readyReadStandardError()), this, SLOT(readBuilderErrOutput()));
	connect(mBuilderProcess, SIGNAL(readyReadStandardOutput()), this, SLOT(readBuilderStdOutput()));
}

DebuggerConnector::~DebuggerConnector() {
	mDebuggerProcess->closeWriteChannel();
	mDebuggerProcess->terminate();
	mThread->terminate();
	delete mDebuggerProcess;
	delete mBuilderProcess;
	delete mThread;
}

bool DebuggerConnector::hasBuildError() {
	return mHasGccError;
}

bool DebuggerConnector::isDebuggerRunning() {
	return mDebuggerProcess->state() == QProcess::Running;
}

void DebuggerConnector::setDebuggerPath(QString path) {
	mDebuggerPath = path;
}

void DebuggerConnector::setBuilderPath(QString path) {
	mBuilderPath = path;
}

void DebuggerConnector::setBuildedFileName(QString name) {
	mBuildedFileName = name;
}

void DebuggerConnector::run() {
	if (!mThread->isRunning()) {
		mThread->start();
	}
}

void DebuggerConnector::startDebugger() {
	QSettings settings("SPbSU", "QReal");
	setDebuggerPath(settings.value("debuggerPath", "gdb.exe").toString());

	if (QFile::exists(mDebuggerPath)) {
		mDebuggerProcess->start(mDebuggerPath);
		mDebuggerProcess->waitForStarted();
		mDebuggerProcess->waitForReadyRead();
	} else {
		emit readyReadErrOutput("Debugger not found");
	}
}

void DebuggerConnector::configure(QString programPath) {
	QString command = "file " + programPath + "\n";
	sendCommand(command);
}

void DebuggerConnector::readOutput() {
	QByteArray out = mDebuggerProcess->readAllStandardOutput();
	QString output = QString(out);
	int index = output.indexOf("(gdb)");
	if (index > 0) {
		emit readyReadStdOutput(output.mid(0, index));
	} else {
		if (index != 0) {
			emit readyReadStdOutput(output);
		}
	}
	mDebuggerProcess->waitForReadyRead();
}

void DebuggerConnector::readErrOutput() {
	QByteArray out = mDebuggerProcess->readAllStandardError();
	QString output = QString(out);
	int index = output.indexOf("(gdb)");
	if (index > 0) {
		emit readyReadErrOutput(output.mid(0, index));
	} else {
		if (index != 0) {
			emit readyReadErrOutput(output);
		}
	}
}

void DebuggerConnector::readBuilderErrOutput() {
	QByteArray out = mBuilderProcess->readAllStandardError();
	emit readyReadErrOutput("gcc build error:\n" + QString(out));
}

void DebuggerConnector::readBuilderStdOutput() {
	QByteArray out = mBuilderProcess->readAllStandardOutput();
	emit readyReadErrOutput("gcc build error:\n" + QString(out));
}

void DebuggerConnector::sendCommand(QString command) {
	mDebuggerProcess->write(command.toAscii());  
	mDebuggerProcess->waitForBytesWritten();
}

void DebuggerConnector::build(QString filePath) {
	QSettings settings("SPbSU", "QReal");
	setBuilderPath(settings.value("builderPath", "gcc.exe").toString());
	setBuildedFileName(settings.value("buildedFileName", "builded.exe").toString());

	QStringList args;
	args.append("-g");
	args.append("-o");
	args.append(mBuildedFileName);
	args.append(filePath);
	
	if (QFile::exists(mBuildedFileName)) {
		if (QFile::exists(mBuilderPath)) {
			mBuilderProcess->start(mBuilderPath, args);
			mBuilderProcess->waitForStarted();
			mBuilderProcess->waitForReadyRead();
			if (mBuilderProcess->exitCode() != 0) {
				mHasGccError = true;
			}
		} else {
			emit readyReadErrOutput("Builder not found");
		}
	} else {
		emit readyReadErrOutput("Source code file not found");
	}
}

void DebuggerConnector::finishProcess() {
	mDebuggerProcess->terminate();
	if (mDebuggerProcess->exitCode() != 0) {
		emit readyReadErrOutput("Debugger closing error");
	} else {
		emit readyReadStdOutput("Debugger was closed successfully");
	}
}
