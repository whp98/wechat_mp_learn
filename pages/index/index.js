//index.js
//创建画布上下文
var ctx = wx.createCanvasContext('myCanvas')
Page({
    //加载之后绘制
    onShow:function(){
        const ctx = wx.createCanvasContext('myCanvas')
        ctx.setFillStyle('red')
        ctx.setShadow(10, 50, 50, 'blue')
        ctx.fillRect(10, 10, 150, 75)
        ctx.draw()        
    },
    clear:function(){
        ctx.draw() //刷新屏幕 显示绘制效果
    },
    drawDot:function(e){
        //参数 中心坐标 半径 开始角度 结束角度
        ctx.arc(200,200,20,0,2*Math.PI)//绘制图形
        ctx.setFillStyle('black') //设置填充样式
        ctx.fill() //填充
        ctx.draw()
    },
    drawCircle: function(){
        ctx.setFillStyle('black')
        ctx.arc(200,200,10,0,2*Math.PI)
        ctx.fill() //填充

        ctx.setStrokeStyle('red') //描边颜色
        ctx.moveTo(300,200)
        ctx.arc(200,200,100,0,2*Math.PI)
        ctx.stroke()
        ctx.draw()
    },
    //画虚线
    drawDash:function(){
        ctx.setStrokeStyle("red")
        ctx.setLineDash([20,10])//虚线样式
        ctx.setLineWidth(10)
        ctx.moveTo(50,100)
        ctx.lineTo(250,100)
        ctx.lineTo(150,300)
        ctx.lineTo(50,100)
        ctx.stroke() //画出路径的边框
        ctx.draw()
        ctx.setLineDash([0,0]) //将线变成原来的样子
        ctx.setLineWidth(1)
    },
    //设置线连接，和端点
    capAndJoin:function(){
        //设置线条颜色宽度还有线条连接样式
        ctx.setStrokeStyle('red')
        ctx.setLineWidth(20)
        //圆形端点
        ctx.setLineCap('round')
        //尖角连接
        ctx.setLineJoin('miter')
        ctx.moveTo(50,50)
        ctx.lineTo(250,50)
        ctx.lineTo(50,250)
        ctx.lineTo(250,250)
        ctx.stroke()
        ctx.draw()
        //恢复原来的样式
        ctx.setLineWidth(1)
        ctx.setLineCap('butt')
        ctx.setLineJoin('mitter')
    },
    //字体绘制
    drawText:function(){
        ctx.setFillStyle("red")
        ctx.setFontSize(40)//设置字体大小
        ctx.setTextBaseline('bottom')
        ctx.fillText('HDU杭电',80,80)//绘制文本

        ctx.setFillStyle('yellow')
        ctx.setTextBaseline('top')
        ctx.fillText('Hello World',80,80)

        ctx.setFillStyle('black')
        ctx.rotate(30*Math.PI/180)//旋转字体
        ctx.fillText("你好",150,80)
        ctx.draw()
    },
    //绘制圆形渐变
    circularGrad:function(){
        var grd = ctx.createCircularGradient(175,175,125)//以175.175为圆心125为半径渐变
        var sss = ctx.createLinearGradient(175, 175, 125) 
        grd.addColorStop(0,'purple')//以渐变为起点
        grd.addColorStop(1,'white')//添加渐变终点
        ctx.setFillStyle(grd)
        //起点50，50宽高都是250
        ctx.fillRect(50,50,250,250)
        ctx.draw()
    },
    //设置阴影矩形
    shadowRect:function(){
        ctx.setFillStyle('orange')
        ctx.setShadow(20,20,50,'yellow')
        ctx.fillRect(50,50,250,250)
        ctx.draw()
    },
    //设置透明
    translucent:function(){
        ctx.setFillStyle('red')
        ctx.setGlobalAlpha(0.2)//透明
        ctx.fillRect(50,50,250,250)
        ctx.draw()
        ctx.setGlobalAlpha(1)//恢复设置
    }
})