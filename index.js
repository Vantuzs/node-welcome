'use strict';

//fs - file sistem

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then(content=>{
    const newContent = `APPENDs OLD content: ${content} and NEW content: 'Hello world, BLYA'`
    // fs.writeFile('./newFile.txt',newContent,'utf8'); // Перезаписывает файлы!!!
    fs.appendFile('./newFile.txt',newContent,'utf8'); // Дописывает файлы
});

/* 

Задача: заминить какуюто часть файла

1. Читаем ВЕСЬ файл через readFile -> ВЕСЬ вмист файлу
2. Както меняем содержимое через JS ->


*/