//index.js
// 计时器显示的数字
var num=0;
// 计时器ID
var timerID;

Page({
    onLoad: function () {
        // 启动
        console.log("index.js:onLoad");
    },
    onShow: function () {
        // 显示
        console.log("index.js:onShow")
    },
    onReady:function(){
        // 页面初次渲染完成
        console.log("index.js:onReady")
    },
    onHide: function () {
        // 隐藏
        console.log("index.js:onHide")
    },

    timer:function(){
        var that = this;
        that.setData({
            num:num++
        })
        console.log(num)
    }

})
