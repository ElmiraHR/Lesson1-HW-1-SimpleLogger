const fs = require('fs'); // Импортируем модуль fs

// Определяем функцию логирования с использованием const
const logMessage = (message) => {
    fs.appendFile('log.txt', message + '\n', (err) => {
        if (err) throw err; // Если есть ошибка, выбрасываем её
        console.log('Сообщение сохранено!'); // Сообщение об успешной записи
    });
};

module.exports =  logMessage; // Экспортируем функцию для использования в файле app.js

