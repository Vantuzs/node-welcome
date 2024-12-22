'use strict';

/* 

require(path) 

Как работает require(HOW REQUIRE WORKS)

resolving: ищет файл который мы указали -> 
loading: читает файл, когда файл прочитано -> 
wrappening: оборачивание в node контекст -> 
evaluation: код выполнется -> 
caching: кешируется результат, сохраняет результат роботы нашего модуля, код в середине модуля выполнится 1 раз

RESOLVING:
    1) Core modules(встроеные модули)
    2) File
        *.js|| *.json
    3)
        3.1) package.json -> "main"
        3.2) index.js || index.json
    4) node_modules
    5) throw new Error();

*/