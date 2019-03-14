/**
 * @method 用来本地存储和取值删除功能,传一个值是get两个值是set
 * @param {string} key 本地存键key值
 * @param {string} val 存储的值 传null值相当于清除函数
 */
export const cache = (key, val) => {
  if (val || val === null || val === 0) {
    val === null ? localStorage.removeItem(key) : localStorage.setItem(key, val)
  } else {
    return localStorage.getItem(key)
  }
}

/**
 * @method 用来转化时间戳是时间变成YMDhms自己自由组合的字符串格式
 * @param {number} time 时间戳
 * @param {string} str Y M  D h m s自由组合的字符串随意组合
 */
export const timestampToStr =  (time, str) => {
  if (!time) return ''
  const date = new Date(time)
  str = str.replace('Y', date.getFullYear())
  str = str.replace('M', (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1))
  str = str.replace('D', (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()))
  str = str.replace('h', (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()))
  str = str.replace('m', (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()))
  str = str.replace('s', (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()))
  return str
}

/**
 * 
 * @param {number} timer 需要转化的时间戳
 */
export const changeTime = (timer) => {
  timer = timer || 0
  let str = ''
  
  let d = Math.floor(timer / (1000 * 60 * 60 * 24))
  let h = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let m = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
  let s = Math.floor((timer % (1000 * 60)) / 1000)
  
  let day = d === 0 ? '' : d + '天'
  let hou = h < 10 ? '0' + h : h
  let min = m < 10 ? '0' + m : m
  let sec = s < 10 ? '0' + s : s
  str = day + hou + ':' + min + ':' + sec
  return str
}

/**
 * @method 用来数字变中文三位一个逗号
 * @param {number} num 需要数字转中文数字的 
 * @return {string}  返回中文数字
 */
export const numberComma = (num) => {
  let str = ''
  let s1 = Math.floor(num / (1000 * 1000))
  let s2 = Math.floor((num % (1000 * 1000)) / 1000)
  let s3 = num % 1000
  if (s1 > 0) {
    let str1 = s1 + ''
    let str2 = s2 === 0 ? '000' : (s2 < 10 ? '00' + s2 : (s2 < 100 ? '0' + s2 : s2 + ''))
    let str3 = s3 === 0 ? '000' : (s3 < 10 ? '00' + s3 : (s3 < 100 ? '0' + s3 : s3 + ''))
    str = str1 + ',' + str2 + ',' + str3
  } else if (s2 > 0) {
    let str2 = s2 + ''
    let str3 = s3 === 0 ? '000' : (s3 < 10 ? '00' + s3 : (s3 < 100 ? '0' + s3 : s3 + ''))
    str = str2 + ',' + str3
  } else {
    str = s3 + ''
  }
  return str
}

/**
 * @method 用来数字变中文数字
 * @param {number} num 需要数字转中文数字的 
 * @return {string}  返回中文数字
 */
export const numberChinese = (num) => {
  let str = ''
  switch (num) {
    case 0:  str = '零'
      break
    case 1: str = '一'
      break
    case 2: str = '二'
      break
    case 3: str = '三'
      break
    case 4: str = '四'
      break
    case 5: str = '五'
      break
    case 6: str = '六'
      break
    case 7: str = '七'
      break
    case 8: str = '八'
      break
    case 9: str = '九'
      break
  }
  return str
}

/**
 * @method 检测是不是app环境
 * @return {boolean} true就是不在app false就是在app中
 */
export const getUserAgent = () => {
  let str = navigator.userAgent
  if (str.indexOf('Bloom_iOS') > -1) {   // ios
    return false
  } else if (str.indexOf('Bloom_Android') > -1) {  // Android
    return false
  } else {
    return true
  }
}

/**
 * @method app环境的登录
 */
export const appLogin = () => {
  if (window.webkit) {
    window.webkit.messageHandlers.popLogin.postMessage(null)
  }
  if (window.AndroidJSObject) {
    window.AndroidJSObject.login()
  }
}

/**
 * @method web向app环境的跳转业务
 * @param str string url加参数
 */
export const pushAPP = (str) => {
  let load = document.createElement('a')
  load.href = `sktbloom://push?ID=${str}`
  document.body.appendChild(load)
  load.click()
  document.body.removeChild(load)
}
