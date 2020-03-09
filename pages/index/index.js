//index.js
//三个全局变量
var start,end,sum;
Page({
    startNum: function(e){
        //将input组件的value转换为整数并赋值
        start = parseInt(e.detail.value);
        console.log(start);
    },
    endNum: function(e){
        end = parseInt(e.detail.value);
        console.log(end);
    },

    calc: function(){
        sum=0;
        for(var i = start ; i <= end ; i++){
            sum = sum+i;
        }
        console.log(sum);
        this.setData({
            sum: sum
        })
    }
})
