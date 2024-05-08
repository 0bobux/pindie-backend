const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
];

function cors(req, res, next) {
    const { origin } = req.headers; // Смотрим, кто стучится к серверу

    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin); // Говорим: «Добро пожаловать!»
    }

    next(); // Идём дальше, не задерживаем очередь
}

module.exports = { cors };