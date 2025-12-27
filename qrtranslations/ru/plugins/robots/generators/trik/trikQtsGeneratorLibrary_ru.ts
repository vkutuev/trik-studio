<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>QObject</name>
    <message>
        <location filename="../../../../../../plugins/robots/generators/trik/trikQtsGeneratorLibrary/src/threadsValidator.cpp" line="+141"/>
        <source>Trying to join a thread with an unknown id. Possible causes: calling fork from a subprogram or trying to merge two threads without a join</source>
        <translation>Попытка присоединить поток с неизвестным идентификатором. Возможные причины: вызов fork из подпрограммы или попытка объединить два потока без join</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Join block must have exactly one outgoing link</source>
        <translation>Блок join должен иметь ровно одну исходящую связь</translation>
    </message>
    <message>
        <location line="+6"/>
        <location line="+45"/>
        <source>Guard property of a link outgoing from a join must contain an id of one of joined threads</source>
        <translation>Свойство условия перехода исходящей связи из join должно содержать идентификатор одного из объединённых потоков</translation>
    </message>
    <message>
        <location line="-38"/>
        <source>Joining threads in a loop is forbidden</source>
        <translation>Объединение потоков в цикле запрещено</translation>
    </message>
    <message>
        <location line="+62"/>
        <source>Trying to fork from a thread with an unknown id. Possible causes: calling fork from a subprogram or trying to merge two threads without a join</source>
        <translation>Попытка выполнить fork из потока с неизвестным идентификатором. Возможные причины: вызов fork из подпрограммы или попытка объединить два потока без join</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Fork block must have at least TWO outgoing links</source>
        <translation>Блок fork должен иметь как минимум ДВЕ исходящие связи</translation>
    </message>
    <message>
        <source>All links outgoing from a fork block must have a thread id specified in a Guard property</source>
        <translation type="vanished">На всех связях, исходящих из блока &quot;Параллельные задачи&quot; должнен быть проставлен идентификатор потока</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Links outgoing from a fork block must have different thread ids</source>
        <translation>Исходящие связи из блока fork должны иметь разные идентификаторы потоков</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Fork block must have a link marked with an id of a thread from which the fork is called, &apos;%1&apos; in this case</source>
        <translation>Блок fork должен иметь связь, помеченную идентификатором потока, из которого вызывается fork, в данном случае &apos;%1&apos;</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Trying to create a thread with an already occupied id &apos;%1&apos;</source>
        <translation>Попытка создать поток с уже занятым идентификатором &apos;%1&apos;</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Creation of threads in a cycle is forbidden, check for links to before a fork</source>
        <translation>Создание потоков в цикле запрещено, проверьте наличие связей, ведущих до блока fork</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Outgoing link is not connected</source>
        <translation>Исходящая связь не подключена</translation>
    </message>
    <message>
        <location filename="../../../../../../plugins/robots/generators/trik/trikQtsGeneratorLibrary/src/trikQtsControlFlowValidator.cpp" line="+37"/>
        <source>There is nothing to generate, diagram doesn&apos;t have Initial Node</source>
        <translation>Нечего генерировать, диаграмма не содержит начального узла</translation>
    </message>
</context>
<context>
    <name>trik::qts::TrikQtsGeneratorPlugin</name>
    <message>
        <source>Generation (QtScript)</source>
        <translation type="vanished">Генерация (QtScript)</translation>
    </message>
    <message>
        <source>Generation (Java Script)</source>
        <translation type="vanished">Генерация (Java Script)</translation>
    </message>
    <message>
        <source>Generate TRIK code</source>
        <translation type="vanished">Генерировать код на QtScript</translation>
    </message>
    <message>
        <source>Upload program</source>
        <translation type="vanished">Загрузить программу</translation>
    </message>
    <message>
        <source>Run program</source>
        <translation type="vanished">Загрузить и выполнить программу</translation>
    </message>
    <message>
        <source>Stop robot</source>
        <translation type="vanished">Остановить робота</translation>
    </message>
    <message>
        <source>Generate TRIK Code</source>
        <translation type="vanished">Сгенерированть код для ТРИК на QtScript</translation>
    </message>
    <message>
        <source>Upload TRIK Program</source>
        <translation type="vanished">Загрузить программу</translation>
    </message>
    <message>
        <source>Run TRIK Program</source>
        <translation type="vanished">Исполнить программу</translation>
    </message>
    <message>
        <source>Stop TRIK Robot</source>
        <translation type="vanished">Остановить выполнение программы для TRIK</translation>
    </message>
    <message>
        <source>QtScript Source File</source>
        <translation type="vanished">Файл с исходным кодом на QtScript</translation>
    </message>
    <message>
        <source>No connection to robot</source>
        <translation type="vanished">Нет соединения с роботом, проверьте настройки, проверьте, включён ли робот</translation>
    </message>
</context>
<context>
    <name>trik::qts::TrikQtsGeneratorPluginBase</name>
    <message>
        <location filename="../../../../../../plugins/robots/generators/trik/trikQtsGeneratorLibrary/src/trikQtsGeneratorPluginBase.cpp" line="+73"/>
        <source>Network operation timed out</source>
        <translation>Истекло время сетевой операции</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Casing model mismatch, check TRIK Studio settings, &quot;Robots&quot; page. It seems that TRIK casing version selected in TRIK Studio differs from version on robot.</source>
        <translation>Несоответствие модели корпуса, проверьте настройки TRIK Studio, страницу &quot;Роботы&quot;. Похоже, версия корпуса TRIK, выбранная в TRIK Studio, отличается от версии на роботе.</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Generate TRIK code</source>
        <translation>Сгенерировать код TRIK</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Upload program</source>
        <translation>Загрузить программу</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run program</source>
        <translation>Запустить программу</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Stop robot</source>
        <translation>Остановить робота</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Generate TRIK Code</source>
        <translation>Сгенерировать код TRIK</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Upload TRIK Program</source>
        <translation>Загрузить программу TRIK</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run TRIK Program</source>
        <translation>Запустить программу TRIK</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stop TRIK Robot</source>
        <translation>Остановить робота TRIK</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>There are no files to upload. You must open or generate at least one *.js or *.py file.</source>
        <translation>Нет файлов для загрузки. Вы должны открыть или сгенерировать хотя бы один файл *.js или *.py.</translation>
    </message>
    <message>
        <source>No connection to robot</source>
        <translation type="vanished">Нет соединения с роботом, проверьте настройки, проверьте, включён ли робот</translation>
    </message>
</context>
</TS>
