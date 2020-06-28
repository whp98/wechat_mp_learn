// pages/API/NavigationBar/index.js
Page({
  data: {
    title: '' //初始化title
  },
  inputTitle: function(e) {
    this.setData({
      title: e.detail.value //将input组件的value值赋值给title
    })
  },
  setNavigationBarTitle: function() {
    let title = this.data.title;
    wx.setNavigationBarTitle({ //设置导航栏标题文本
      title: title //将局部变量title赋值给函数参数title（导航条标题）
    })
  },
  
  setNavigationBarColor: function() {
    wx.setNavigationBarColor({ //设置导航条颜色
      frontColor: '#ffffff', //前景色
      backgroundColor: '#ff0000', //背景色
      animation: {
        duration: 4000, //动画时长
        timingFunc: 'easeInOut' //动画方式
      }
    })
  },
  showNavigationBarLoading: function() {
    wx.showNavigationBarLoading() //显示加载动画
  },
  hideNavigationBarLoding: function() {
    wx.hideNavigationBarLoading() //隐藏加载动画
  }
})