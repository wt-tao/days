var WxParse = require('../../wxParse/wxParse.js');
// var curpage = 1
// var hadLastPage;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:[],
    url: getApp().globalData.urls,
   hadLastPage:false,
   curpage : 1,
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
  },
  openMap: function () {
    wx.navigateTo({
      url: '../tel_my/tel_my',
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  }
  ,
news1:function(e){
  console.log(e)
  var id =e.currentTarget.id
  wx.navigateTo({
    url: '../team1/team1?id='+id,
  })
},
  news2: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../team2/team2?id=' + id,
    })
  },
  news3: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../team3/team3?id=' + id,
    })
  },
  news4: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../team4/team4?id=' + id,
    })
  },
  news5: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../team5/team5?id=' + id,
    })
  },
  news6: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../team6/team6?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  loading: function () {
    var hadLastPage = this.data.hadLastPage
    var curpage = this.data.curpage
    // console.log('********************' + hadLastPage)
    if (hadLastPage != false) {
      wx.showToast({
         title: '到底了', 
         });
      return;
    }
    var that = this;
    wx.request({
      url: getApp().globalData.url + '/api/News/News',
      method: "GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      data: {
        product5: this.data.id,
        news7: 1,
        news9: 307,
        news10: 0,
        news12:false,
        pagesize: 10,
        curpage: curpage
      },
      success: function (r) {
        console.log(r)
        var listData = that.data.news
        for (var i = 0; i < r.data.resultData.data.length; i++) {
          listData.push(r.data.resultData.data[i])
        }
        if (r.data.resultData.totalpage == r.data.resultData.curindex) {
          that.setData({
            hadLastPage: true
          }) 
        } else {
          wx.showToast({
            title: '加载中..',
            icon:'loading',
            duration: 1000,
          })
          that.setData({
            curpage: curpage + 1
          }) 
        }
        that.setData({
          news: listData
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.loading();
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
    this.loading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})