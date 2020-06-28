// pages/API/ScancodeAndMakephonecal/index.js
Page({
  data: {
    brightness: '待查询',
    copyBrightness: ''
  },
  setScreenBrightness: function (e) {
    wx.setScreenBrightness({ //设置屏幕亮度API函数
      value: e.detail.value //将slider组件的值传递给函数的参数
    })
  },
  getScreenBrightness: function () {
    var that = this;
    wx.getScreenBrightness({ //获取屏幕亮度API函数
      success: function (res) {
        that.setData({ //将屏幕亮度值设置为保留小数点后一位并传递给绑定数据
          brightness: res.value.toFixed(1)
        })
      },
    })
  },
  setKeepScreenOn: function (e) {
    let isKeeping = e.detail.value //将switch组件的值赋值给自定义变量
    if (isKeeping) { //如果switch组件被选中，则设置屏幕保持亮度
      wx.setKeepScreenOn({
        keepScreenOn: true
      })
      wx.vibrateShort() //手机短时振动
    }
  },
  copyBrightness: function () {
    var that = this
    let brightness = this.data.brightness
    wx.setClipboardData({ //设置剪贴板数据API函数
      data: brightness, //给剪贴板数据赋值
      success: function (res) {
        wx.showToast({ //显示提示信息
          title: '复制成功！'
        })
      }
    })
    wx.getClipboardData({ //获取剪贴板数据API函数 
      success: function (res) {
        that.setData({
          copyBrightness: res.data //将剪贴板数据赋值给绑定变量
        })
      }
    })
  }
})