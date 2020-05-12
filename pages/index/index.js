//index.js
//创建画布上下文
Page({
    onReady:function(){
        // 创建动画实例
        this.animation = wx.createAnimation()
    },
    rotate:function(){
        this.animation.rotate(Math.random()*720-360).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    scale:function(){
        // 缩放
        this.animation.scale(Math.random()*2).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    translate:function(){
        // 平移动画
        this.animation.translate(50,50).step()
        this.setData({
            animation:this.animation.export()
        });
        
    },
    skew: function () {
        // 倾斜动画
        this.animation.skew(0,30).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    rotateAndScale:function(){
        //旋转并缩放
        this.animation.rotate(Math.random()*720-360).scale(Math.random()*2).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    // 旋转之后缩放
    rotateThenScale:function(){
        this.animation.rotate(Math.random()*720-360).step().scale(Math.random()*2).step()
        this.setData({
            animation:this.animation.export()
        })
    },
    all:function(){
        this.animation.rotate(Math.random*100 - 50,Math.random()*100 -50)
        .scale(3)
        .translate(30,30)
        .skew(20,30)
        .step()
        this.setData({
            animation:this.animation.export()
        })
    },
    allInQueue:function(){
        // 顺序显示所有动画
        this.animation.rotate(Math.random * 100 - 50, Math.random() * 100 - 50)
            .step().scale(3)
            .step().translate(30, 30)
            .step().skew(20, 30)
            .step()
    },
    reset:function(){
        this.animation.rotate(0,0)
        .scale(1)
        .translate(0,0)
        .skew(0,0)
        .step({
            duration:0
        })
        this.setData({
            animation:this.animation.export()
        })
    }
})