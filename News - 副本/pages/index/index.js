//index.js
//获取应用实例

var util = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;

    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000,
      success:function(){
        wx.request({
          url: "https://xa.mingtengnet.com/index.php/Server/Server/list_news",
          data: {
            catid: "3"
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
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

  }
  ,
  about:function(){
    wx.navigateTo({
      url: '../about/about'
    })
  }
  ,
  xiangqing: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../xiangqing/xiangqing?id=' + id
    })
  }
  ,
  submit:function(){
    wx.navigateTo({
      url: '../submit/submit'
    })
  }
  ,
  query:function(){
    wx.navigateTo({
      url: '../query/query'
    }) 
  }
  ,
  newsss:function(){
    wx.navigateTo({
      url: '../new/new'
    })   
  }
  ,
  gan:function(){
    wx.navigateTo({
      url: '../gan/gan'
    })  
  }
  ,
  he:function(){
    wx.navigateTo({
      url: '../he/he'
    })  
  }
})
