const appRoot = require('app-root-path')
const winston = require('winston')

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/log/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 25,
        colorize: false
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    },
    fileErrors: {
        level: 'warn',
        filename: `${appRoot}/log/error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 25,
        colorize: false
    }
}

const logger = new winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
        new winston.transports.File(options.fileErrors)
    ],
    exitOnError: false //do not exit on handled exceptions
})

logger.stream = {
    write: (message, encoding) => [
        logger.info(message)
    ]
}

module.exports = logger