// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '' // 函数调用结果字符串
  },
  // 云函数调用事件函数
  callFunction: function(e) {
    console.log(e)
    var that = this;
    const username = e.detail.value.username,
      password = e.detail.value.password;
    if (username > '') { // 如果用户输入的用户名不为空
      wx.showLoading({
        title: '调用checkUser。。。',
      })
      wx.cloud.callFunction({ // 调用云函数
        name: 'checkUser', // 函数名称
        data: { // 函数参数
          username: username, // 用户名
          password: password // 密码
        },
        complete: res => { // 调用完成时的回调函数
          wx.hideLoading()
        },
        success: res => { // 调用成功时的回调函数
          console.log('[云函数] [checkUser] result: ', res)
          that.setData({
            result: res.result // 云函数调用的返回结果
          })
        },
        fail: err => { // 调用失败时的回调函数
          console.error('[云函数] [checkUser] 调用失败', err)
          that.setData({
            result: '[云函数] [checkUser] 调用失败'
          })
        }
      })
    } else {
      wx.showToast({
        title: '用户名不能为空！',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})