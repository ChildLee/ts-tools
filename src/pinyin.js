const pinyin = require('pinyin')
const pinyinlite = require('pinyinlite')

// console.log(pinyin('重庆', {
//     heteronym: true,
//     style: pinyin.STYLE_NORMAL
// }))


console.log(pinyinlite('重庆', {
    keepUnrecognized: true
}))