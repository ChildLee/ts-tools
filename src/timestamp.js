/**
 * 格式化时间
 * dateFormat()                           //2018-08-08
 * dateFormat('YYYY-MM-DD HH:mm:ss ms')  //2018-08-08 08:08:08 888
 * dateFormat('YY-M-D H:m:s')             //18-8-8 8:8:8
 * dateFormat('YYYY-MM-DD')               //2018-08-08
 * dateFormat('HH:mm:ss')                 //08:08:08
 * dateFormat(new Date())                 //2018-08-08
 * dateFormat(Date.now())                 //2018-08-08
 */

const regex = /(YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s|ms)/

function _getTimestamp(date, pattern, useUTC) {
  // 第一个参数是字符串且不含数字,则为YYYY-MM-DD格式
  if (typeof date === 'string' && !/\d/.test(date)) {
    pattern = date
    date = undefined
  }

  // 第一个参数有值则不实例化(时间戳或者时间)
  date = date || new Date()

  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  if (isNaN(date)) {
    throw TypeError('参数有问题')
  }

  pattern = pattern || 'YYYY-MM-DD'

  function timestamp() {
    let match = regex.exec(pattern)
    if (match) {
      let increment = method(match[1], useUTC)
      let val = ''
      // 是否需要补零
      if (!increment[1]) {
        val = String(date[increment[0]]() + (increment[2] || 0))
      } else {
        val = '00' + (date[increment[0]]() + (increment[2] || 0))
        val = val.slice(-increment[1])
      }
      pattern = pattern.replace(match[0], val)
      timestamp()
    }
  }

  timestamp(pattern)
  return pattern
}

// 第二个参数为显示的位数,false为自动
// 第三个参数为少的月份
function method(key, useUTC) {
  return ({
    YYYY: [useUTC ? 'getUTCFullYear' : 'getFullYear', 4],
    YY: [useUTC ? 'getUTCFullYear' : 'getFullYear', 2],
    MM: [useUTC ? 'getUTCMonth' : 'getMonth', 2, 1],
    M: [useUTC ? 'getUTCMonth' : 'getMonth', false, 1],
    DD: [useUTC ? 'getUTCDate' : 'getDate', 2],
    D: [useUTC ? 'getUTCDate' : 'getDate', false],
    HH: [useUTC ? 'getUTCHours' : 'getHours', 2],
    H: [useUTC ? 'getUTCHours' : 'getHours', false],
    mm: [useUTC ? 'getUTCMinutes' : 'getMinutes', 2],
    m: [useUTC ? 'getUTCMinutes' : 'getMinutes', false],
    ss: [useUTC ? 'getUTCSeconds' : 'getSeconds', 2],
    s: [useUTC ? 'getUTCSeconds' : 'getSeconds', false],
    ms: [useUTC ? 'getUTCMilliseconds' : 'getMilliseconds', 3]
  })[key]
}

module.exports = function (pattern, date) {
  return _getTimestamp(pattern, date, false)
}

module.exports.utc = function (pattern, date) {
  return _getTimestamp(pattern, date, true)
}
