const fs = require('fs')

it('should stat/获取文件信息', function () {
    fs.stat('a.txt', (err, stats) => {
        console.log(stats)
    })
})

it('should readFile', function () {
    fs.readFile('a.txt', (err, data) => {
        console.log(data)//<Buffer 36 36 36>
    })
})

it('should fs', function () {

})