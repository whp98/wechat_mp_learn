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
        }
    },
    scoreInput:function(e){
        this.setData({
            score:e.detail.value
        })
    }
})