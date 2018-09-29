// pages/he/he.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classsys:[],
  },
  phone: function () {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  }
  ,
  he: function () {
    wx.reLaunch({
      url: '../he/he'
    })
  },
  openMap: function () {
    wx.navigateTo({
      url: '../tel_my/tel_my',
    })
  },
  news1: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../major1/major1?id='+id,
    })
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
      }
    })
    wx.request({
      url: getApp().globalData.url + '/api/Product/getProductClass',
      method: "GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      data: {
        mid: 308
      },
      success: function (r) {
        console.log(r)
        that.setData({
          classsys: r.data.resultData
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