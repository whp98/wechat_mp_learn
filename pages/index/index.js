// pages/index/index.js
Page({
  showTabBar:function(){
    wx.showTabBar({
      aniamtion: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  hideTabBar:function(){
    wx.hideTabBar({
      aniamtion: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  setTabBarBadge:function(){
    wx.setTabBarBadge({
      index: 3,
      text: '10',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  removeTabBarBadge:function(){
    wx.removeTabBarBadge({
      index: 3,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  showTabBarRedDot:function(){
    wx.showTabBarRedDot({
      index: 1,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  hideTabBarRedDot:function(){
    wx.hideTabBarRedDot({
      index: 1,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  setTabBarStyle:function(){
    wx.setTabBarStyle({
      color: '#ff0000',
      selectedColor: '#0000ff',
      backgroundColor: '#ffff00',
      borderStyle: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  setTabBarItem:function(){
    wx.setTabBarItem({
      index: 4,
      text: '云开发',
      iconPath: '/images/cloud.png',
      selectedIconPath: '/images/cloud-selected.png',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  reset:function(){
    wx.setTabBarStyle({
      color: '#000000',
      selectedColor: '#00ff00',
      backgroundColor: '#fff',
      borderStyle: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.setTabBarItem({
      index: 4,
      text: '关于我们',
      iconPath: '/images/guanyu-off.png',
      selectedIconPath: '/images/guanyu-on.png',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

})