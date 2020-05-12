//index.js
//创建画布上下文
var tempFilePaths,tempFilePath;
Page({
    data:{
        msg:'',
        hidden:true
    },
    openFile:function(){
        var that = this;
        wx.chooseImage({
            success(res) {
                tempFilePaths = res.tempFilePaths
                //console.log('打开文件路径'+tempFilePaths)
                that.setData({
                    imgPath:tempFilePaths[0],
                    hidden:false,
                    msg:'文件打开成功！'
                })
            },
        })
    },
    saveFile:function(){
        var that = this;
        wx.saveFile({
            tempFilePath:tempFilePaths[0],
            success(res){
                
                console.log('保存文件路径'+res.savedFilePath);
                that.setData({
                    hidden:false,
                    msg:'文件保存成功'
                })
            }
        })
    },
    getSavedFileInfo:function(){
        var i,file;
        var that = this;
        wx.getSavedFileList({
            success:function(res){
                if(res.fileList.length==0){
                    that.setData({
                        hidden:false,
                        msg:'没有文件信息'
                    })
                }else{
                    for(i=0;i<res.fileList.length;i++){
                       file = res.fileList[i];
                       console.log("第"+(i+1)+'个文件路径:'+file.filePath)
                       wx.getSavedFileInfo({
                           filePath: file.filePath,
                           success:function(res){
                               console.log('第'+i+'个文件大小为：'+res.size)
                               that.setData({
                                   hidden:false,
                                   msg:'文件数量'+i+'\n最后一个文件的大小：'+res.size+'\n最后一个文件创建时间:' + res.createTime

                               })
                           }
                       })
                    }
                }
            }
        })
    },
    removedSavedFile:function(){
        var i,file;
        var that = this;
        // 获取已经保存的文件列表
        wx.getSavedFileList({
            success:function(res){
                for(i=0;i<res.fileList.length;i++){
                    file = res.fileList[i];
                    wx.removeSavedFile({
                        filePath: file.filePath,
                    })
                    console.log("第"+(i+1)+'个文件被删除')
                }
                that.setData({
                    hidden:false,
                    msg:'文件被删除'
                })
            }
        })
    }
    
})