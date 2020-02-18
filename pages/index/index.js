//index.js

Page({
  data: {
    imgSrc:"/images/icons8_cat_128px.png"
  },
  //事件处理函数
  tapCat:function(){
    let audio=wx.createInnerAudioContext();
    audio.src ='/audios/10310.wav';
    audio.play();
  }
})
