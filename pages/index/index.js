//index.js


Page({
    getInput: function(e) {
        this.inputVal = e.detail.value;
    },

    onShow: function() {
        var that = this;
        that.isShow = true;
        //加速度改变的api
        wx.onAccelerometerChange(function(e) {
            if (!that.isShow) {
                //判断小程序是否显示
                return
            }
            //判断手机是否晃动到某一程度
            if (e.x > 0.5 || e.y > 0.5 || e.z > 0.5) {
                wx.showToast({ //显示消息框
                    title: '摇一摇成功',
                    icon: 'success',
                    duration: 2000
                })
                var result = 1;
                console.log(that.inputVal)
                for (var i = 1; i <= that.inputVal; i++) {
                    result = result * i;
                    console.log(result)
                }
                console.log(result)
                that.setData({
                    result:result
                })
            }
        })

    },
    onHide: function() {
        this.isShow = false
    }

})