//index.js
//三个全局变量
var rand,sum;
//产生随机数
function createRand(){
    //初始化随机数数组
    rand=[];
    //初始化sum变量
    sum=0;
    for(var i=0;i<6;i++){
        var r = (Math.random()*100).toFixed(2)*1;//产生100以内的随机数
        //将产生的随机数放到数组中
        rand.push(r);
        sum += rand[i];
        console.log(rand[i]);
    }
    console.log(sum);
}
Page({
    onLoad: function(){
        //产生随机数
        createRand();
        this.setData({
            rand:rand,
            sum:sum
        })
    },
    newRand:function(){
        //产生随机数
        createRand();
        this.setData({
            rand:rand,
            sum:sum
        })
    }
})
