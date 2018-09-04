/**
 *  循环promise测试
 */
function sleep(t) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve()
        }, 1000)
    })
}

new Promise(async resolve => {
    for (var i = 1; i < 5; i++) {
        await sleep(i)
        console.log(i)
    }
    resolve()
}).then(res => {
    console.log(666)
})
