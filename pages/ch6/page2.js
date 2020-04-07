//pages\ch6\page2.js
Page({
    formSubmit: function (e) {
        var a = parseFloat(e.detail.value.a);
        var b = parseFloat(e.detail.value.b);
        var c = parseFloat(e.detail.value.c);
        var area;
        if (a + b <= c || a + c <= b || b + c <= a) {
            wx.showToast({
                title: '三角形的两边之和小于第三条边',
                icon: 'none',
                duration: 2500
            });
            this.formReset();
            return;
        } else {
            var s = (a + b + c) / 2;
            area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
        }
        this.setData({
            result: area
        });

    },
    formReset: function (e) {
        this.setData({
            a: '',
            b: '',
            c: '',
            result: ''
        })
    }
})