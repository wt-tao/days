// pages/new/new.js
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
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000,
      success:function(){
        wx.request({
          url: "https://xa.mingtengnet.com/index.php/Server/Server/list_news",
          data: {
            catid:"3"
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res);
            for (var i in res.data.news) {
              var n = parseInt(res.data.news[i].sendtime) * 1000;
              var date = new Date(n);
              var Y = date.getFullYear() + '-';
              var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
              var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
              res.data.news[i].sendtime = Y + M + D
            }
            that.setData({
              list: res.data.news
            })
          }
        })
      }
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
  xiangqing:function(e){
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../xiangqing/xiangqing?id='+id
    })
  }
})