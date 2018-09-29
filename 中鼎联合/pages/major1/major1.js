// pages/major1/major1.js
// var curpage=1
// var hadLastPage=false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[],
    url: getApp().globalData.urls,
    hadLastPage: false,
    curpage:1
  }, about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  }
  ,
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
  product1:function(e){
// console.log(e)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../major2/major2?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id=options.id
    this.setData({
      id:id
    })
  },
loading:function(){
  var hadLastPage = this.data.hadLastPage
  var curpage = this.data.curpage
  // console.log('********************' + hadLastPage)
  // console.log('********************' + curpage)
  // if(hadLastPage!=false){
  //   wx.showToast({ title: '到底了',});
  //   return;
  // }
  // var that = this;
  // wx.request({
  //   url: getApp().globalData.url + '/api/Product/Product',
  //   method: "GET",
  //   header: {
  //     'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
  //   },
  //   data: {
  //     product5: this.data.id,
  //     product7: 1,
  //     product9: 290,
  //     product10: 0,
  //     pagesize: 10,
  //     curpage: curpage
  //   },
  //   success: function (r) {
  //     console.log(r)
  //     var listData = that.data.product
  //     for (var i = 0; i < r.data.resultData.data.length;i++){
  //       listData.push(r.data.resultData.data[i])
  //     }
  //     if (r.data.resultData.totalpage == r.data.resultData.curindex){
  //       that.setData({
  //         hadLastPage :true
  //       }) 
  //     }else{
  //       wx.showToast({
  //         title: '加载中..',
  //         icon: 'loading',
  //         duration: 1000,
  //       })
  //       that.setData({
  //         curpage: curpage+1
  //       }) 
  //     } 
  //     that.setData({
  //       product: listData
  //     })
  //   }
  // })
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