// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileID: '', // 上传文件的ID
    cloudPath: '', // 上传文件的云端路径
    imagePath: '', // 上传图片的本地临时路径
    downloadedFilePath: '', // 图片下载后的本地临时路径
    uploadSuccess: false, // 文件是否上传成功的标记
    downloadSuccess: false // 文件是否下载成功的标记
  },
  // 图片上传事件函数
  doUpload: function() {
    var that = this;
    const fileID = this.data.fileID;
    if (fileID != '') { // 如果之前上传了图片（fileID不为空）则删除之
      wx.cloud.deleteFile({
        fileList: [fileID] // 要删除的文件ID的数组
      })
    }
    // 选择图片
    wx.chooseImage({ // 调用接口选择图片
      count: 1, // 图片数量
      sizeType: ['compressed'], // 尺寸类型
      sourceType: ['album', 'camera'], // 图片来源
      success: function(res) { // 调用成功时的回调函数
        wx.showLoading({ // 显示加载提示框
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0] // 保存上传文件的临时路径
        console.log("filePath:", filePath)
        // 上传图片
        const cloudPath = 'img' + Date.now() + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({ // 调用接口上传文件
          cloudPath, // 文件的云端路径
          filePath, // 文件的本地临时路径
          success: res => { // 调用成功时的回调函数
            console.log('[上传文件] 成功：', res)
            that.setData({ // 设置页面绑定数据
              uploadSuccess: true,
              downloadSuccess: false,
              fileID: res.fileID,
              cloudPath: cloudPath,
              imagePath: filePath,
              downloadedFilePath: ''
            })
          },
          fail: e => { // 调用失败时的回调函数
            console.error('[上传文件] 失败：', e);
            that.setData({ // 设置页面绑定数据
              uploadSuccess: false,
              fileID: '',
              cloudPath: '',
              imagePath: ''
            })
            wx.showToast({ // 显示消息提示框
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => { // 调用完成时的回调函数
            wx.hideLoading() // 隐藏加载提示框
          }
        })
      },
      fail: e => { // 调用失败时的回调函数
        console.error(e)
      }
    })
  },
  // 图片下载事件函数
  doDownload: function() {
    var that = this;
    wx.showLoading({ // 显示加载提示框
      title: '下载中',
    })
    wx.cloud.downloadFile({ // 调用接口下载文件
      fileID: that.data.fileID, // 云端文件ID
      success: res => { // 调用成功时的回调函数
        console.log("下载文件成功: ", res)
        that.setData({ // 设置页面绑定数据
          downloadSuccess: true,
          downloadedFilePath: res.tempFilePath
        })
        wx: wx.showModal({ // 显示模态对话框
          title: '文件下载成功',
          content: '文件路径：' + that.data.downloadedFilePath,
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#0000ff',
        })
      },
      fail: err => { // 调用失败时的回调函数
        that.setData({ // 设置页面绑定数据
          downloadSuccess: false,
          downloadedFilePath: ''
        })
      },
      complete: () => { // 调用完成时的回调函数
        wx.hideLoading() // 隐藏加载提示框
      }
    })
  },
  // 图片预览事件函数
  previewImg: function() {
    wx.previewImage({ // 调用接口预览图片
      current: '', // 当前显示图片的http链接
      urls: [this.data.downloadedFilePath] // 需要预览的图片url的数组
    })
  }
})