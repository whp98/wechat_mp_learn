//index.js

Page({
    // 函数逻辑转换
    calc:function(e){
        // 定义变量x，y
        var x,y; 
        // 获取input组件的输入的数值并且赋值
        x = e.detail.value;

        //根据x值进行判断求y值
        if(x<0){
            y=Math.abs(x);
        }else if(x<10){
            y=Math.exp(x)*Math.sin(x);
        }else if(x<20){
            y=Math.pow(x,3);
        }else{
            y = (3+2*x)*Math.log(x);
        }

        this.setData({
            y: y
        })
    }
})
