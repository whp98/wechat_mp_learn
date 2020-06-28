// pages/API/DeviceInfo/index.js
Page({
  data: {
    hide1: false,
    hide2: true
  },
  getSystemInfo: function() { //异步获取设备信息
    var that = this;
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          msg: '异步',
          hide1: false,
          hide2: true,
          model: res.model,
          pixelRatio: res.pixelRatio,
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          language: res.language,
          version: res.version,
          system: res.system,
          platform: res.platform,
          SDKVersion: res.SDKVersion
        })
      },
    })
  },

  getSystemInfoSync: function() {
    var that = this;
    try {
      var res = wx.getSystemInfoSync();
      that.setData({
        msg: '同步',
        hide1: true,
        hide2: false,
        model: res.model,
        pixelRatio: res.pixelRatio,
        screenWidth: res.screenWidth,
        screenHeight: res.screenHeight,
        windowWidth: res.windowWidth,
        windowHeight: res.windowHeight,
        language: res.language,
        version: res.version,
        system: res.system,
        platform: res.platform,
        SDKVersion: res.SDKVersion
      })
    } catch (e) {
      console.log(e)
    }
  }

})