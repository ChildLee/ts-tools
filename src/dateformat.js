let dateformat = function (date, mask) {
    //只有一个参数且为string时,调换参数位置并实例化一个Date
    if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/\d/.test(date)) {
        mask = date
        date = undefined
    }

    //date为number或者undefined
    date = date || new Date()

    //date不是Date实例时重新实例
    if (!(date instanceof Date)) {
        date = new Date(date)
    }

    //判断实例化的对象是不是正确的
    if (isNaN(date)) {
        throw TypeError('Format Date Error')
    }

    mask = String(dateformat.masks[mask] || mask || dateformat.masks['default'])

    let arr = [{
        reg: '(Y+)',
        replace: date.getFullYear()
    }, {
        reg: '(M+)',
        replace: date.getMonth() + 1
    }, {
        reg: '(D+)',
        replace: date.getDate()
    }, {
        reg: '(H+)',
        replace: date.getHours()
    }, {
        reg: '(m+)',
        replace: date.getMinutes()
    }, {
        reg: '(s+)',
        replace: date.getSeconds()
    }, {
        reg: '(S+)',
        replace: date.getMilliseconds()
    }]
    const len = arr.length - 1
    //处理年份
    new RegExp(arr[0].reg).test(mask) ?
        mask = mask.replace(RegExp.$1, String(arr[0].replace).substring(4 - RegExp.$1.length)) : null
    //处理月日时分秒
    for (let i = 1; i < len; i++) {
        new RegExp(arr[i].reg).test(mask) ?
            RegExp.$1.length === 2 ?
                mask = mask.replace(RegExp.$1, ('00' + arr[i].replace).substring(String(arr[i].replace).length))
                : mask = mask.replace(RegExp.$1, String(arr[i].replace))
            : null
    }
    //处理毫秒
    new RegExp(arr[len].reg).test(mask) ?
        mask = mask.replace(RegExp.$1, ('000' + arr[len].replace).substring(String(arr[len].replace).length).substring(3 - RegExp.$1.length))
        : null
    return mask
}

dateformat.masks = {
    'default': 'YYYY-MM-DD HH:mm:ss',
    'isoDate': 'YYYY-MM-DD',
    'isoTime': 'HH:mm:ss'
}

export default dateformat