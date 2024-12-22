'use strict';

//fs - file sistem

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then(content=>{
    const newContent = `12 OLD content: ${content} and NEW content: 'Hello world, BLYA'`
    fs.writeFile('./newFile.txt',newContent,'utf8'); // Перезаписывает файлы
});

