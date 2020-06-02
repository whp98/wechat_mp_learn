//index.js
//创建画布上下文
var tempFilePaths,tempFilePath;
Page({
    data:{
        msg:'',
        hidden:true  //默认隐藏
    },
    Student:function(id,name,Chinese,Math,English){
        // 一个学生对象包含学号姓名语文数学英语成绩
        this.id = id;
        this.name = name;
        this.Chinese = Chinese;
        this.Math = Math;
        this.English = English;
    },
    loadStudents:function(){
        var Student = new Array();//创建学生数组
        var stu1 = new this.Student(1,'Tom',95,90,98);
        var stu2 = new this.Student(2,'Has',67,72,80);
        Student.push(stu1);
        Student.push(stu2);
        return Student; //返回学生数组
    },
    
    setStorage:function(){ //定义异步存储数据的函数
        var that = this;
        wx.setStorage({ //调用异步存储函数
            key: '高一',
            data: this.loadStudents(),
            success:function(){
                that.setData({
                    hidden: false,//可见
                    msg: "异步数据存储成功！"
                })
            }
        })
    },
    setStorageSync: function () { //同步存储数据
        var that = this;
        wx.setStorageSync("高二", this.loadStudents());
        that.setData({
            hidden:false,
            msg:"同步存储数据成功！"
        })
    },
    //异步获取数据,哈哈
    getStorage:function(){
        var that = this;
        wx.getStorage({
            key:"高一",
            success:function(res){
                var length = res.data.length;
                if(length>1){
                    that.setData({
                        hidden:false,
                        msg:"异步数据存储成功，学生1为："+
                        "\n学号："+res.data[length-2].id+
                        "\n姓名："+res.data[length-2].name+
                        "\n语文成绩："+res.data[length-2].Chinese+
                        "\n数学成绩:"+res.data[length-2].Math+
                        "\n 英语成绩:"+res.data[length-2].English
                    })
                    console.log(res.data)
                }
            },
            fail:function(){
                that.setData({
                    hidden:false,
                    msg:"异步获取数据失败！"
                })
            }
        })
    },

    // 同步获取数据
    getStorageSync:function(){
        var that = this;
        // 避免意外
        try{
            var value = wx.getStorageSync("高二");
            var length = value.length;
            if(length>1){
                that.setData({
                    hidden:false,
                    msg:'同步获取缓存数据成功，学生2为：'+
                    "\n学号"+value[length-1].id+
                    "\n姓名"+value[length-1].name+
                    "\n语文成绩"+value[length-1].Chinese+
                    "\n数学成绩"+value[length-1].Math+
                    "\n英语成绩"+value[length-1].English
                })
                console.log(value)
            }
        }catch(e){
            that.setData({
                hidden:false,
                msg:"同步数据获取失败！"
            })
            console.log(e);
        }
    },
    // 获取有缓存信息的函数
    getStorageInfo:function(){
        var that = this;
        wx.getStorageInfo({
            success:function(res){
                that.setData({
                    hidden:false,
                    msg:"异步信息获取成功\n"+
                    "使用空间："+res.currentSize
                    +"\n最大使用空间内为："+res.limitSize
                })
                console.log(res)
            },
            fail:function(){
                that.setData({
                    hidden:false,
                    msg:'异步获取缓存信息失败！'
                })
            }
        })
    },

    // 同步获取缓存信息
    getStorageInfoSync:function(){
        var that = this;
        try{
            var res = wx.getStorageInfoSync()
            that.setData({
                hidden:false,
                msg:"同步获取缓存信息成功！\n"+
                "已经使用空间为："+res.currentSize+
                "\n最大空间为："+res.limitSize
            })
            console.log(res)
        }catch(e){
            that.setData({
                hidden:false,
                msg:"同步获取缓存信息失败"
            })
            console.log(e)
        }
    },
    // 异步删除
    removeStorage:function(){
        var that = this;
        wx.removeStorage({
            key:'高一',
            success:function(res){
                that.setData({
                    hidden:false,
                    msg:"异步删除缓存数据成功！"
                })
                console.log(res.data)
            },
            fail:function(){
                that.setData({
                    hidden:false,
                    msg:"异步删除数据失败"
                })
            }
        })
    },
    // 同步删除数据
    removeStorageSync:function(){
        var that = this;
        try{
            // 同步删除数据
            wx.removeStorageSync("高二");
            that.setData({
                hidden:false,
                msg:"同步删除数据成功！"
            })
        }catch(e){
            that.setData({
                hidden:false,
                msg:"同步删除缓存数据失败！"
            })
            console.log(e)
        }
    }

})