//index.js

Page({

    data:{
        a:10,
        b:20,
        c:30,
        Student:{
            stuID:"17051926",
            name:"颤三",
            birthday:'2001-1-9'
        },
        array:[
            '2018',
            '2019',
            '2020'
        ]
    },
    modify:function(){
        this.setData({
            a: 100,
            b: 200,
            c: 300,
            Student: {
                stuID: "1700051926",
                name: "颤00三",
                birthday: '20001-1-9'
            },
            array: [
                '20118',
                '22019',
                '20220'
            ]
        })
    }

})
