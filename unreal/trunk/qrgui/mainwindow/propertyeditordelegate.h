#pragma once

#include <QItemDelegate>
#include <QModelIndex>
#include <QObject>
#include <QSize>
#include <QLineEdit>

#include "../models/logicalModelAssistApi.h"

namespace qReal {
	class MainWindow;
}

class PropertyEditorDelegate : public QItemDelegate
{
	Q_OBJECT

public:
	explicit PropertyEditorDelegate(QObject *parent = 0);
	QWidget *createEditor(QWidget *parent, const QStyleOptionViewItem &option,
			const QModelIndex &index) const;

	void setEditorData(QWidget *editor, const QModelIndex &index) const;
	void setModelData(QWidget *editor, QAbstractItemModel *model,
			const QModelIndex &index) const;

	void updateEditorGeometry(QWidget *editor,
			const QStyleOptionViewItem &option, const QModelIndex &index) const;
	void init(qReal::MainWindow *mainWindow, qReal::models::LogicalModelAssistApi * const logicalModelAssistApi);
private:
	QModelIndex mIndex;
	qReal::MainWindow *mMainWindow;
	qReal::models::LogicalModelAssistApi *mLogicalModelAssistApi;
};
