// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, // 用户公开信息
    hasUserInfo: false, // 是否获取了用户公开信息
    canIUse: wx.canIUse('button.open-type.getUserInfo'), // 是否支持使用getUserInfo按钮
    openID: '', // 用户身份ID信息
    detail: '点击头像显示你的详细信息', // 用户详细信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
		wx.getSetting({ // 调用接口获取用户的当前设置
			success: res => { // 调用成功时的回调函数
        if (res.authSetting['scope.userInfo']) {
          // 如果已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({ // 调用接口获取用户公开信息
						success: res => { // 调用成功时的回调函数
              this.setData({ // 设置页面绑定数据
                userInfo: res.userInfo,
                hasUserInfo: true
              })
            }
          })
				}
      }
    })
    this.getOpenID() // 调用getOpenID函数
  },
  getUserInfo: function (e) { // 定义getUserInfo按钮的单击事件函数
    console.log(e)
		if (e.detail.userInfo){ // 如果返回参数中包含userInfo数据，则已经获取了用户公开信息
			this.setData({ // 设置页面绑定数据
				userInfo: e.detail.userInfo,
				hasUserInfo: true
			})
		}else{ // 否则就显示模态对话框，提示授权失败信息
			wx.showModal({
				title: e.detail.errMsg,
				content: '小程序需要用户授权获取公开信息才可以继续。',
			})
		}
  },

  // 定义获取用户OpenID的函数
  getOpenID: function() {
    var that = this;
    wx.showLoading({ // 显示加载提示框
      title: '获取openID。。。',
    })
    wx.cloud.callFunction({ // 调用云函数
      name: 'login', // 函数名称
      data: {}, // 函数参数
      complete: res => { // 调用完成时的回调函数
        wx.hideLoading() // 隐藏加载提示框
      },
      success: res => { // 调用成功时的回调函数
        console.log('[云函数] [login] user openid: ', res.result.openid)
        that.setData({ // 设置页面绑定数据
          openID: '[云函数]获取openID成功：' + res.result.openid,
        })
      },
      fail: err => { // 调用失败时的回调函数
        console.error('[云函数] [login] 调用失败', err)
        that.setData({ // 设置页面绑定数据
          openID: '[云函数]获取openID失败' + err
        })
      }
    })
  },
  // 定义获取用户详细信息的函数
  getDetail: function() {
    var userInf = this.data.userInfo;
    var gender = (userInf.gender == 1) ? "男" : (userInf.gender == 2) ? "女" : "未知";
    var detailStr = "性别：" + gender;
    detailStr = detailStr + "\n国家：" + userInf.country;
    detailStr = detailStr + "\n省份：" + userInf.province;
    detailStr = detailStr + "\n城市：" + userInf.city;
    this.setData({ // 设置页面绑定数据
      detail: detailStr
    })
  }
})
