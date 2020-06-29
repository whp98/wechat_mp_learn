// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opName: "", // 数据库操作名称，如‘add’‘qry’等等
    opResult: "", // 数据库操作结果字符串
    opResult2: "", // 数据库操作结果字符串2
    resData: null, // 数据库操作结果数据
    resData2: null, // 数据库操作结果数据2
    finished: false // 数据库操作是否完成的标记
  },
  // “增”按钮点击事件函数
  addRecord: function() {
    this.setData({
      opName: "add",
      finished: false
    })
  },
  // “删”按钮点击事件函数
  deleteRecord: function() {
    this.setData({
      opName: "del",
      finished: false
    })
  },
  // “改”按钮点击事件函数
  updateRecord: function() {
    this.setData({
      opName: "upd",
      finished: false
    })
  },
  // “查”按钮点击事件函数
  queryRecord: function() {
    this.setData({
      opName: "qry",
      finished: false
    })
  },
  // 拼接日期字符串的函数
  makeDateString: function(dateObj) {
    return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
  },
  // 拼接时间字符串的函数
  makeTimeString: function(dateObj) {
    return dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();
  },
  // 添加记录事件函数
  doAdd: function(e) {
    console.log(e)
    var workContent = e.detail.value.workContent
    if (workContent != "") { // 如果用户输入内容不为空
      const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
      var myDate = new Date()
      db.collection('work_done').add({ // 向集合‘work_done’中添加一条记录
        data: { // 一条记录的字段数据
          date: this.makeDateString(myDate), // 日期字符串
          time: this.makeTimeString(myDate), // 时间字符串
          content: workContent // 工作内容字符串
        },
        complete: res => { // 操作完成时的回调函数
          this.setData({
            finished: true
          })
        },
        success: res => { // 操作成功时的回调函数
          // 在返回结果中会包含新创建的记录的 _id
          this.setData({
            opResult: "操作完成，新增一条记录，_id为：\n ",
            resData: res._id
          })
          wx.showToast({
            title: '新增记录成功',
          })
          console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        },
        fail: err => { // 操作失败时的回调函数
          wx.showToast({
            icon: 'none',
            title: '新增记录失败'
          })
          console.error('[数据库] [新增记录] 失败：', err)
        }
      })
    } else {
      wx.showToast({
        title: '请输入事情描述！',
      })
    }
  },
  // 删除记录事件函数
  doDelete: function(e) {
    console.log(e)
    var that = this
    var itemID = e.detail.value.itemID
    if (itemID != "") { // 如果用户输入的记录id不为空
      const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
      db.collection('work_done').doc(itemID).get({ // 从集合‘work_done’中查询id为itemID的记录
        success: res => { // 操作成功时的回调函数
          console.log(res)
          this.setData({
            opResult: '查询记录成功：\n',
            resData: res.data
          })
          db.collection('work_done').doc(itemID).remove({ // 操作接口从集合‘work_done’中删除这条记录
            complete: res => { // 操作完成时的回调函数
              that.setData({
                finished: true
              })
            },
            success: res => { // 操作成功时的回调函数
              console.log('[数据库] [删除记录] 成功: ', res)
              that.setData({
                opResult2: '已成功删除上面的记录。'
              })
            },
            fail: err => { // 操作失败时的回调函数
              wx.showToast({
                icon: 'none',
                title: '删除记录失败'
              })
              console.error('[数据库] [删除记录] 失败：', err)
            }
          })
        },
        fail: err => { // 操作失败时的回调函数
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
    } else {
      wx.showToast({
        title: '请输入itemID！',
      })
    }
  },
  // 更新记录事件函数
  doUpdate: function(e) {
    console.log(e)
    var that = this
    var itemID = e.detail.value.itemID
    var workContent = e.detail.value.workContent
    if (itemID != "") { // 如果用户输入的记录id不为空
      const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
      db.collection('work_done').doc(itemID).get({ // 从集合‘work_done’中查询id为itemID的记录
        success: res => { // 操作成功时的回调函数
          this.setData({
            opResult: '查询记录成功：\n',
            resData: res.data
          })
          db.collection('work_done').doc(itemID).update({ // 更新集合‘work_done’中的这条记录
            data: {
              content: workContent,
            },
            complete: res => { // 操作完成时的回调函数
              that.setData({
                finished: true
              })
            },
            success: res => { // 操作成功时的回调函数
              console.log('[数据库] [更新记录] 成功: ', res)
              that.setData({
                opResult2: '已成功更新上面的记录内容为：\n',
                resData2: workContent
              })
            },
            fail: err => { // 操作失败时的回调函数
              wx.showToast({
                icon: 'none',
                title: '更新记录失败'
              })
              console.error('[数据库] [更新记录] 失败：', err)
            }
          })
        },
        fail: err => { // 操作失败时的回调函数
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
    } else {
      wx.showToast({
        title: '请输入itemID！',
      })
    }
  },
  // 查询记录事件函数
  doQuery: function(e) {
    console.log(e)
    var workDate = e.detail.value.workDate
    if (workDate != "") { // 如果用户输入的日期字符串不为空
      const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
      db.collection('work_done').where({ // 从集合‘work_done’中查询记录（最多二十条）
        date: workDate // 记录创建日期
      }).get({
        complete: res => { // 操作完成时的回调函数
          this.setData({
            finished: true
          })
        },
        success: res => { // 操作成功时的回调函数
          this.setData({
            opResult: "操作完成，查询到" + res.data.length + "条记录：\n ",
            resData: res.data
          })
          console.log('[数据库] [查询记录] 成功: ', res)
        },
        fail: err => { // 操作失败时的回调函数
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
    } else {
      wx.showToast({
        title: '请输入查询日期！',
      })
    }
  }
})