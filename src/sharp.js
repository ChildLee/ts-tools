const sharp = require('sharp')

it('should go', function () {
    sharp('images/b.jpg').resize(750).toFile('b.jpg').then(res => {
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
    sharp('images/a.jpg').resize(1000).overlayWith('images/bd.png', {
        tile: true,//平铺
        left: 10000,
        top: 10000
    }).toFile('a.jpg')
})

it('should c', async () => {
    sharp('images/a.jpg').toFile('a.jpg').then(res => {
        console.log(res)
    })
})