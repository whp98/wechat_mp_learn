// 云函数入口文件
const cloud = require('wx-server-sdk') // 引用云开发支持库
cloud.init() // 初始化云环境
// 云函数入口函数
exports.main = async(event, context) => {
  console.log('event:', event)
  const username = event.username, password = event.password
  var result = ''
  try {
    const db = cloud.database() // 将云数据库的引用保存在常量db中
    var res = await db.collection('user_list').where({ // 在集合‘user_list’中查询记录
      username: username // 用户名
    }).get()
    console.log('查询结果res：', res)
    if (res.data[0].password === password) { // 如果查询到的记录中的password字段等于用户输入的密码
      result = '验证成功' // 设置结果字符串
    } else {
      result = '密码错误' // 设置结果字符串
    }
  } catch (e) { // 查询失败
    console.error('查询失败e：', e)
    result = '用户名不存在' // 设置结果字符串
  }

  return result // 返回结果字符串
}
