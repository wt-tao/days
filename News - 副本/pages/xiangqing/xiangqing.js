// pages/xiangqing/xiangqing.js
var WxParse = require('../../wxParse/wxParse.js');
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
    var id = options.id;
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 2000,
      success:function(){
        wx.request({
          url: "https://xa.mingtengnet.com/index.php/Server/Server/get_news_detail?",
          data: {
            id: id
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {

            var n = parseInt(res.data.addtime) * 1000;
            var date = new Date(n);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            res.data.addtime = Y + M + D
            WxParse.wxParse('article', 'html', res.data.content, that, 5);
            that.setData({
              list: res.data
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
})