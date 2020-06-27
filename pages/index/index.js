//index.js
Page({
    startCompass: function() {
      var that = this
      wx.startCompass({ //启动罗盘传感器监听功能
        success: function() {
          wx.onCompassChange(function(res) { //监听罗盘传感器
            that.setData({
              resCompass: res  //res为回调函数的参数
            })
          })
        }
      })
    },
    stopCompass: function() {
      var that = this;
      wx.stopCompass({ //停止罗盘传感器监听功能
        success: function(res) {
          console.log('罗盘已经停止！')
        }
      })
    },
    startAcc: function() {
      var that = this;
      wx.startAccelerometer({ //启动加速度感器监听功能
        success: function() {
          wx.onAccelerometerChange(function(res) { //监听罗盘传感器
            that.setData({
              resAcc: res  //res为回调函数的参数
            })
          })
        }
      })
    },
    stopAcc: function() {
      wx.stopAccelerometer({ //停止罗盘传感器监听功能
        success: function(res) {
          console.log('已停止加速度传感器监听！')
        }
      })
    },
  
    startGyroscope: function() {
      var that = this;
      wx.startGyroscope({ //启动陀螺仪传感器监听功能
        success: function(res) {
          wx.onGyroscopeChange(function(res) { //监听陀螺仪传感器
            that.setData({
              resGyroscope: res  //res为回调函数的参数
            })
          })
        }
      })
    },
    stopGyroscope: function() {
      wx.stopGyroscope({ //停止陀螺仪传感器监听功能
        success: function(res) {
          console.log('已停止陀螺仪传感器监听！')
        }
      })
    }
  })