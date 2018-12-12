const bcrypt = require('bcryptjs')

it('should hash', function () {
    console.log(bcrypt.hashSync('1').length)
})

it('should ha', function () {
    bcrypt.compare('1', '$2a$10$HOsfIaPNhAj3fhmAy5yO9.jmWKSu/wa6Iee4CvJI4QccVS43u.yh.').then(res => {
        console.log(res)
    })
}) 