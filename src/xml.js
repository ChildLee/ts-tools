const {Builder, Parser} = require('xml2js')

const parser = new Parser({
    //不获取根节点
    explicitRoot: false,
    //true始终将子节点放入数组中; false则只有存在多个数组时才创建数组。
    explicitArray: false
})

const builder = new Builder({
    //根节点名称
    rootName: 'xml'
})

it('should xml', function () {
    console.time("1")
    console.log(builder.buildObject({a: 1, b: 2}))
    console.timeEnd("1")
})