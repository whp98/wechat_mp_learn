//index.js

Page({
    data:{
        showFlag:true,
        name:'',
        chinese_score:'',
        math_score:'',
        average:''
    },
    nameInput: function(e){
        this.setData({
            name: e.detail.value
        });
    },
    chineseInput: function (e) {
        this.setData({
            chinese_score: e.detail.value
        });
    },
    mathInput: function (e) {
        this.setData({
            math_score: e.detail.value
        });
    },
    mysubmit:function(e){
        if(this.data.name==''||this.data.chinese_score=='' 
        || this.data.math_score==''){
            return '';
        }else{
            var avg = (this.data.chinese_score*1+this.data.math_score*1)/2;
            this.setData({
                showFlag: false,
                average:avg,
            });
        }
    }
})
