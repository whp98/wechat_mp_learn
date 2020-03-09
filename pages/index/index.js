//index.js
// 计时器显示的数字
var num=60;
// 计时器ID
var timerID;

Page({
    data:{
        hidden:true,
        num:num
    },
    onLoad: function(options){
        var that = this;
        setTimeout(()=>{
            that.show()
        },500)//500ms后显示计时界面
    },
    show: function(){
        var that = this;
        that.setData({
            hidden:false//显示计时界面
        })
    },
    start: function(){
        var that = this;
        timerID=setInterval(()=>{
            that.timer()
        },1000)//每隔一秒调用一次timer函数
    },
    stop:function(){
        clearInterval(timerID)//清除计时器
    },

    timer:function(){
        var that = this;
        console.log(num)
        if(num>0){
            that.setData({
                num:num--
            })
        }else{
            that.setData({
                num:0
            })
        }
        console.log(num)
    }
})
