//index.js
function Person(name,sex,birthPlace,birthDay,height,weight){
    //定义构造函数，用于创建对象
    this.name =name;
    this.sex=sex;
    this.birthPlace=birthPlace;
    this.birthDay=birthDay;
    this.height=height;
    this.weight=weight;
}

Page({
    data:{
        flag:true,
        gender:['男','女']
    },

    nameInput:function(e){
        this.name=e.detail.value
    },
    //选择性别之后把结果放到页面上
    pickerSex:function(e){
        this.sex=this.data.gender[e.detail.value]
        this.setData({
            sex:this.sex
        })
    },
    //将籍贯结果显示
    pickerRegion:function(e){
        this.birthPlace=e.detail.value;
        this.setData({
            birthPlace:this.birthPlace
        })
    },
    //出生日期选择器
    pickerDate:function(e){
        this.birthDay=e.detail.value;
        this.setData({
            birthDay:this.birthDay
        })
    },
    heightInput:function(e){
        this.height=e.detail.value
        this.setData({
            height:this.height
        })
    },
    weightInput:function(e){
        this.weight = e.detail.value
        this.setData({
            height: this.weight
        })
    },
    showMessage:function(e){
        var p = new Person(this.name,this.sex,this.birthPlace,this.birthDay,this.height,this.weight)
        this.setData({
            flag:false,
            person:p
        })
    }
})