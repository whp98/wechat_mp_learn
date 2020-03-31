//index.js
Page({
    data:{
        stu01:{
            name:"www",
            age:12,
            gender:"man"
        },
        stu02: {
            name: "小明",
            age: 122,
            gender: "女"
        },
        stu03: {
            name: "sss",
            age: 32,
            gender: "男"
        },
        car01:{
            brand:"特斯拉",
            model:"Y",
            color:"黑色"
        },
        car02: {
            brand: "特斯拉",
            model: "S",
            color: "红色"
        },
        car03:{
            brand:"奔驰",
            model:"s600",
            color:"银灰色"
        }
    },
    scoreInput:function(e){
        this.setData({
            score:e.detail.value
        })
    }
})