//index.js
//获取应用实例

// var util = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    about:[],
    news:[],
    url: getApp().globalData.urls,
  }, 
  phone:function() {
   wx.reLaunch({
     url: '../index/index',
   })

  }, 
  openMap:function(){
    wx.navigateTo({
      url: '../tel_my/tel_my',
    })
  },
  onLoad: function () {
    // var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000,
    })
    // wx.request({
    //   url: getApp().globalData.url +'/api/Home/getData',
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
    //   },
    //   data: {
    //     id:225
    //   },
    //   success:function(r){
    //     console.log(r)
    //     that.setData({
    //       about:r.data.resultData.about,
    //       news: r.data.resultData.news
    //     })
    //   }
    // })
  }
  ,
  about:function(){
    wx.navigateTo({
      url: '../about/about'
    })
  }
  ,

  he:function(){
    wx.navigateTo({
      url: '../he/he'
    })  
  },
  news:function(){
  wx.navigateTo({
    url: '../introduce/introduce',
  })
  },
   
   news1:function(e){
     console.log(e)
     var id = e.currentTarget.id
     wx.navigateTo({
       url: '../list1/list1?id='+id,
     })
   },
  news2: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../list2/list2?id=' + id,
    })
  },
  news3: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../list3/list3?id=' + id,
    })
  },
  news4: function (e) {
    console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../list4/list4?id=' + id,
    })
  },

})
