// pages/API/ScancodeAndMakephonecal/index.js
Page({
    name:'',    //定义联系人姓名
    phone: '',  //定义联系人电话
    scanCode: function() {
      var that = this;
      wx.scanCode({   //调用扫码API函数
        onlyFromCamera: false,  //通过摄像头和调用相册图片都可以进行扫码
        scanType: [], //不指定码的类型
        success: function(res) {
          that.setData({
            resCode: res  //获取扫码结果
          })
        },
      })
    },
    inputName: function(e) {
      this.name = e.detail.value;  //获取联系人姓名
    },
    inputPhone: function(e) {
      this.phone = e.detail.value;  //获取联系人电话
    },
    makeCall: function() {
      let phone = this.phone;
      wx.makePhoneCall({  //调用打电话API函数
        phoneNumber: phone
      })
    },
    addPerson: function() {
      let name = this.name;
      let phone = this.phone;
      if (name == '' || phone == '') {
        wx.showToast({
          title: '姓名和电话不能为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.addPhoneContact({  //调用添加联系人API函数
          firstName: name,
          mobilePhoneNumber: phone
        })
      }
    }
  })