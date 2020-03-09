//index.js


Page({
    // 创建颜色
    createColor:function(){
        var color = [];//数组
        // 十六进制字符集
        var letters = "0123456789ABCDEF";
        for(var i=0;i<3;i++){
            var c = "#";
            for(var j=0;j<6;j++){
                c += letters[Math.floor(Math.random()*16)];
            }
            color.push(c);
        }
        console.log(color);
        this.setData({
            color1:color.pop(),
            color2:color.pop(),
            color3:color.pop()
        })
    },
    onLoad: function(e){
        this.createColor();
        setInterval(()=>{
            this.createColor();
        },5000)
    },
    changeColor:function(e){
        this.createColor();
    }

})
