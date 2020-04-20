//index.js
Page({
    data: {
        poster:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001hGx1Z0so1YX.jpg?max_age=2592000',
        name:'我是如此相信',
        author:'周杰伦',
        src:'http://isure.stream.qqmusic.qq.com/C400001PLl3C4gPSCI.m4a?guid=4486890145&vkey=B7CC4E7890585EEE272DAC578ADC65BC6AA32E2564BF91EE20924FBAAA994F96CAF590882907514D46EF98BCED45217D381CBFB2E417770D&uin=208&fromtag=66',
    
    },
    onLoad:function(options){
        //页面初始化
        this.audioCtx = wx.createAudioContext('myAudio')//创建音频上下文
    },
    audioPlay:function(){
        this.audioCtx.play()
    },
    audioPause:function(){
        this.audioCtx.pause()
    },
    audioStart:function(){
        this.audioCtx.seek(0)
    },
    audio14:function(){
        this.audioCtx.seek(14)
    }
})