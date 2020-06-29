// pages/API/ActionSheet/index.js
var myItemList = ['第一项', '第二项', '第三项', '第四项']
Page({
  showActionSheet: function() {
    var that = this;
    wx.showActionSheet({ //调用API函数显示操作菜单
      itemList: myItemList, //操作菜单项列表
      itemColor: '#0000FF', //操作菜单项文字颜色
      success: function(res) {
        console.log(myItemList)
        that.setData({
          tapIndex: res.tapIndex, //点击的菜单序号
          tapItem: myItemList[res.tapIndex] //点击的菜单项
        })
      },
      fail: function(res) {
        that.setData({
          tapIndex: -1,
          tapItem: '取消'
        })
      },
      complete: function(res) {},
    })
  }
})