//index.js

function getRandIn(){
    //产生0-9之间的随机整数
    return Math.floor(Math.random()*10);
}

Page({
    
    data:{
        index: 0,//初始化数组下标为0
        imgArr: [
            '/images/1.jpeg',
            '/images/2.jpg',
            '/images/3.jpeg',
            '/images/4.jpg',
            '/images/5.jpeg',
            '/images/6.jpg',
            '/images/7.jpeg',
            '/images/8.jpeg',
            '/images/9.jpeg',
            '/images/3.jpg'
        ],
    },
    changeFace:function(){
        this.setData({
            index:getRandIn()
        })
    },
    onShow:function(){
        var that = this;
        wx.onAccelerometerChange(function(res){//加速度变化监听函数
            if(res.x> 0.5|| res.y>0.5 || res.z>0.5){
                wx.showToast({
                    title: '摇一摇成功',
                    icon:'success',
                    duration:1000 //显示时间
                })
                that.changeFace()
            }
        })
    }
    

})