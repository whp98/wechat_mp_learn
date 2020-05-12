//index.js
//创建画布上下文
Page({
    data:{
        latitude: 39.93111,
        longitude: 116.199167,
        markers: [
            {
                id: 1,
                latitude: 39.93111,
                longitude: 116.199167,
                iconPath: '../images/1.jpeg',
                label: {
                    content: "我的位置",
                    color: '#0000FF',
                    bgColor: '#FFFF00',
                    fontSize: 20
                }
            },{
                latitude:39.92528,
                longitude:116.20111,
                iconPath: '../images/1.jpeg'
            }
        ]
    },
    chooseLocation:function(){
        wx.chooseLocation({
            success: function(res) {
                console.log(res)
            },
        })
    },
    openLocation:function(){
        wx.getLocation({
            type:'gcj02',
            success: function(res) {
                wx.openLocation({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    scale:15
                })
            },
        })
    }
    
})