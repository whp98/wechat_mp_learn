//pages\ch6\page3.js
Page({
    data: {
        myFontSize: '25px'
    },
    checkboxchange: function (e) {
        var text = [];
        var mybold = '';
        var myitalic = '';
        var myunderline = '';
        text = e.detail.value;
        console.log(text);
        for (var i = 0; i < text.length; i++) {
            if (text[i] == 'isBold') {
                mybold = 'bold';
            }
            if (text[i] == 'isItalic') {
                myitalic = 'italic';
            }
            if (text[i] == 'isUnderline') {
                myunderline = 'underline';
            }
        }
        this.setData({
            myBold: mybold,
            myItalic: myitalic,
            myUnderline: myunderline
        })
    },
    radiochange: function (e) {
        this.setData({
            myFontSize: e.detail.value
        })
        console.log(e.detail.value);
    }
})