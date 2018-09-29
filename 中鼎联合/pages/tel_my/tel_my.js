// pages/tel_my/tel_my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  phone: function () {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  he: function () {
    wx.reLaunch({
      url: '../he/he'
    })
  }, about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  }
  ,
  openMap: function () {
    wx.navigateTo({
      url: '../tel_my/tel_my',
    })
  },
  onLoad: function () {
    var that = this;

    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000,

    })
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = 30.526360
        var longitude = 104.038390
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
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