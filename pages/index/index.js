//index.js
Page({
    data:{
        r:50,
        g:65,
        b:89,
        a:0.5
    },
    colorChanging(e){
        let color = e.currentTarget.dataset.color //获取slader组件的data-color值
        let value = e.detail.value; //slader组件的value
        console.log(color,value)
        this.setData({
            [color]:value
        })
    }
})