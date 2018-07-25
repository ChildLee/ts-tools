const sharp = require('sharp')
const fs = require('fs')

it('should go', function () {
    sharp('test/b.jpg').resize(750).toFile('temp/b.jpg').then(res => {
        console.log(res)
    })

})

it('should 图片裁剪并转成base64', function () {
    sharp('images/a.jpg')
        .resize(100)
        .toBuffer()
        .then(res => {
            console.log('data:image/png;base64,' + res.toString('base64'))
        })
})

it('should b', function () {
    if (fs.existsSync('c.png')) fs.unlinkSync('c.png')

    sharp('images/a.jpg').resize(1000).overlayWith('images/bd.png', {
        left: 10000,
        top: 10000
    }).pipe(fs.createWriteStream('temp/c.jpg'))


})