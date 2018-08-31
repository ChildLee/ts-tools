const axios = require('axios').default

it('should ax', async () => {
    const res = await axios.post('http://127.0.0.1:3000/admin', {a: 2})
    console.log(res.data)
})