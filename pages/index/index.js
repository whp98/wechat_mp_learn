//index.js

function getRandomColor(){
    let rgb=[]
    for(let i=0;i<3;i++){
        let color = Math.floor(Math.random()*256).toString(16)
        color=color.length==1 ? '0' + color : color
        rgb.push(color)
    }
    return "#"+rgb.join('')
}

Page({
    data:{
        danmulist:[
            {
                text:"第一条弹幕",
                color:'#568910',
                time:1
            },
            {
                text: "第二条弹幕",
                color: '#ff8910',
                time: 3
            },
            {
                text: "第三条弹幕",
                color: '#128910',
                time: 4
            }
        ]
    },
    onLoad:function(options){
        this.videoCtx = wx.createVideoContext("myVideo")
    },
    inputBlur:function(e){
        this.inputValue=e.detail.value;
    },
    sendDanmu:function(){
        this.videoCtx.sendDanmu({
            text:this.inputValue,
            color:getRandomColor()
        })
    }
})