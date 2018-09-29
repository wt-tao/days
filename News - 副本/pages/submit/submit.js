// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['四川省', '成都市', '青羊区'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  ,
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }
  ,
  formSubmit:function(e){
    var region = this.data.region.toString();
    var arr = region.split(',');
    var province = arr[0];
    var city = arr[1];
    var district = arr[2];

    var address = e.detail.value.address;
    var phone = e.detail.value.phone;
    var name = e.detail.value.name;
    var phone2 = e.detail.value.phone2;
    var louceng = e.detail.value.louceng;
    var xinxi = e.detail.value.xinxi;
    var liuyan = e.detail.value.liuyan;
    if (address == ""){
      wx.showToast({
        title: '请输入详细地址',
        icon: 'loading',
        duration: 2000
      })
    }
    else if (!(/^1[34578]\d{9}$/.test(phone))){
      wx.showToast({
        title: '联系方式有误',
        icon: 'loading',
        duration: 2000
      })
    }
    else if (!(/^1[34578]\d{9}$/.test(phone2))){
      wx.showToast({
        title: '客户电话有误',
        icon: 'loading',
        duration: 2000
      })
    }
    else if (louceng == "") {
      wx.showToast({
        title: '请输入楼层',
        icon: 'loading',
        duration: 2000
      })
    }
    else if (xinxi == "") {
      wx.showToast({
        title: '请输入提货信息',
        icon: 'loading',
        duration: 2000
      })
    }
    else{

      wx.request({
        url: "https://xa.mingtengnet.com/index.php/Server/Server/order",
        data: {
          username: name,
          mobile: phone2,
          concat: phone,
          province: province,
          city: city,
          district: district,
          address: address,
          floor: louceng,
          information: xinxi,
          note: liuyan,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data);
          var order = res.data.orderid;
          wx.showModal({
            title: '订单号',
            content: order,
            success: function (res) {
              if (res.confirm) {
                wx.showToast({
                  title: '提交成功',
                  icon: 'success',
                  duration: 2000,
                  success: function () {
                    wx.reLaunch({
                      url: '../index/index '
                    })
                  }
                })
              } 
              else if (res.cancel) {
                wx.showToast({
                  title: '提交成功',
                  icon: 'success',
                  duration: 2000,
                  success: function () {
                    wx.reLaunch({
                      url: '../index/index '
                    })
                  }
                })
              }
            }
          })

         
        }
      }) 

    }

  }
})