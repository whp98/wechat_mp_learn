//index.js
//创建画布上下文
var tempFilePaths,tempFilePath;
Page({
    data:{
        status:"获取中。。。。"
    },
    //在这个函数里面获取网络类型
    onLoad:function(options){
        var that = this;
        wx.getNetworkType({
            success:function(res){
                that.setData({
                    status:res.networktType
                })
            }
        })
        wx.onNetworkStatusChange(function(res){
            if(res.isConnected){
                that.setData({
                    status:res.networkType
                })
            }else{
                that.setData({
                    status:"未联网！"
                })
            }
        })
    },
    wifiStatus:function(){
        var that = this;
        wx.getConnectedWifi({
            // 获取已经链接的WiFi
            success:function(res){
                that.setData({
                    res:res.wifi
                })
                console.log(res);
            }
        })
    }

})