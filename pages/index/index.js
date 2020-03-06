//index.js

Page({
    // 摄氏温度转换华氏温度
    calce:function(e){
        // 定义变量
        var C,F; 
        // 获取input组件的输入的数值
        C = e.detail.value;
        this.setData({
            F: C*9/5+32
        })
    }
})
