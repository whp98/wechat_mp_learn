//index.js
//创建画布上下文
Page({
    //清除
    isClear:false,
    data:{
        pen:5,
        color:'#000000'
    },
    onLoad:function(){
        this.ctx =wx.createCanvasContext('myCanvas', this)//绘制画布绘图环境
    },
    touchStart:function(e){
        this.x1 = e.changedTouches[0].x;
        this.y1 = e.changedTouches[0].y;
        if(this.isClear){
            this.ctx.setStrokeStyle("#FFFFFF");
            this.ctx.setLineCap("round");
            this.ctx.setLineJoin('round');
            this.ctx.setLineWidth(20);
            this.ctx.beginPath();
        }else{
            this.ctx.setStrokeStyle(this.data.color);
            this.ctx.setLineWidth(this.data.pen);
            this.ctx.setLineCap('round');
            this.ctx.beginPath();
        }
    },

    touchMove:function(e){
        var x2 = e.changedTouches[0].x;
        var y2 = e.changedTouches[0].y;
        if(this.isClear){
            this.ctx.moveTo(this.x1,this.y1);
            this.ctx.lineTo(x2,y2);
            this.ctx.stroke();
            this.x1=x2;
            this.y1=y2;
        }else{
            this.ctx.moveTo(this.x1,this.y1);
            this.ctx.lineTo(x2,y2);
            this.ctx.stroke();
            this.x1=x2;
            this.y1=y2;
        }
        this.ctx.draw(true);
    },
    touchEnd:function(){},

    penSelect:function(e){
        console.log(222)
        this.setData({
            pen:e.currentTarget.dataset.param
        });
        this.isClear = false;
    },
    colorSelect: function (e) {
        this.setData({
            color: e.currentTarget.dataset.param
        });
        this.isClear = false;
    },
    clear:function(){
        this.isClear=true;
    },

    clearAll:function(){
        this.setData({
            pen:5,
            color:"#000000"
        })
        this.ctx.draw();
    
    }
})