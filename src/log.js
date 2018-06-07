const path = require('path')
const log4js = require('log4js')


log4js.configure({
    appenders: {
        stdout: {type: 'stdout'},
        file: {type: 'file', filename: path.join(__dirname, '..', 'log', 'log.log')},
        dateFile: {type: 'dateFile', filename: path.join(__dirname, '..', 'log', 'log.log'), pattern: '-yyyy-MM-dd.log'}
    },
    categories: {
        default: {appenders: ['stdout'], level: 'trace'},
        file: {appenders: ['file'], level: 'trace'},
        dateFile: {appenders: ['dateFile'], level: 'trace'}
    }
})

let logger = log4js.getLogger()

logger.level = 'trace'

logger.trace('Entering cheese testing')
logger.debug('Got cheese.')
logger.info('Cheese is Gouda.')
logger.warn('Cheese is quite smelly.')
logger.error('Cheese is too ripe!')
logger.fatal('Cheese was breeding ground for listeria.')