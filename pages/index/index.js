//index.js
var C;
Page({
    formSubmit: function(e) {
        C = parseInt(e.detail.value.cels);
        console.log(C);
        this.setData({
            MY: (C / 6.8801).toFixed(4),
            YB: (C / 8.7873).toFixed(4),
            XG: (C / 0.8805).toFixed(4),
            OY: (C / 7.8234).toFixed(4),
            HY: (C / 0.0061).toFixed(4),
            RY: (C / 0.0610).toFixed(4)
        })
    },
    formReset: function(e) {
        this.setData ({
            MY: '',
            YB: '',
            XG: '',
            OY: '',
            HY: '',
            MY: '',
            RY: '',
        })
    }
})