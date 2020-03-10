//index.js

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
    onUnload: function(){
        // 页面卸载
        console.log("index.js:onUnload")
    }

})
