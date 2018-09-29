// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var options = options.id;
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000,
      success:function(){
        wx.request({
          url: "https://xa.mingtengnet.com/index.php/Server/Server/get_order_images",
          data: {
            orderid: options
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res.data);
            if (res.data == "") {
              var num = 0;
              that.setData({
                list: "",
                num: num
              })
            }
            else {
              var num = 1;
              that.setData({
                list: res.data.images,
                num: num
              })
            }

          }
        })
      }
    })

console.log(this.data);

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
})