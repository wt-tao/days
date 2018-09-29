// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   num:"",
   arr:{"id":0}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000,
      success:function(){



        if (options.num == 2) {
          var that = this;
          wx.request({
            url: "https://xa.mingtengnet.com/index.php/Server/Server/get_orders_detail",
            data: {
              orderid: "2017101157545399/2017101110253565"
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              for (var k in res.data.orders) {
                for (var i in res.data.orders[k].data) {

                  var n = parseInt(res.data.orders[k].data[i].time) * 1000;
                  var date = new Date(n);
                  var Y = date.getFullYear() + '-';
                  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                  var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ':';
                  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ':';
                  var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                  res.data.orders[k].data[i].data = Y + M + D;
                  res.data.orders[k].data[i].time = H + m + S;
                }
              }
              that.setData({
                list: res.data.orders
              })
            }

          })
        }
        else {
          var that = this;
          wx.request({
            url: "https://xa.mingtengnet.com/index.php/Server/Server/get_order_detail",
            data: {
              orderid: id
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log(res.data);
              if (res.data.orders == undefined) {
                var arr = new Array();
                arr[0] = res.data

                for (var k in res.data.data) {
                  var n = parseInt(res.data.data[k].time) * 1000;
                  var date = new Date(n);
                  var Y = date.getFullYear() + '-';
                  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                  var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ':';
                  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ':';
                  var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                  res.data.data[k].data = Y + M + D;
                  res.data.data[k].time = H + m + S
                }
                that.setData({
                  list: arr
                })
              }
              else {
                for (var k in res.data.orders) {
                  for (var i in res.data.orders[k].data) {

                    var n = parseInt(res.data.orders[k].data[i].time) * 1000;
                    var date = new Date(n);
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                    var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ':';
                    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ':';
                    var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                    res.data.orders[k].data[i].data = Y + M + D;
                    res.data.orders[k].data[i].time = H + m + S;
                  }
                }
                that.setData({
                  list: res.data.orders
                })
              }


            }
          })


        }

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
  ,
  indss:function(e){
    var name = e.detail.value;
    this.setData({
      num:name
    })
  }
  ,
  dasdasd:function(e){
    var id = e.currentTarget.id;
    this.aaa(id);
  }
  ,
  aaa:function(id){
    var id = id;
    var that = this;
    wx.request({
      url: "https://xa.mingtengnet.com/index.php/Server/Server/get_order_detail",
      data: {
        orderid: id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        if (res.data.orders == undefined) {
          var arr = new Array();
          arr[0] = res.data

          for (var k in res.data.data) {
            var n = parseInt(res.data.data[k].time) * 1000;
            var date = new Date(n);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ':';
            var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ':';
            var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            res.data.data[k].data = Y + M + D;
            res.data.data[k].time = H + m + S
          }
          that.setData({
            list: arr
          })
        }
        else {
          for (var k in res.data.orders) {
            for (var i in res.data.orders[k]) {
              var n = parseInt(res.data.orders[k].data[i].time) * 1000;
              var date = new Date(n);
              var Y = date.getFullYear() + '-';
              var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
              var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
              var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ':';
              var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ':';
              var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
              res.data.orders[k].data[i].data = Y + M + D;
              res.data.orders[k].data[i].time = H + m + S;
            }
          }
          that.setData({
            list: res.data.orders
          })
        }


      }
    }) 

  }
  ,
  tupian:function(e){
    var id = e.currentTarget.id;
    console.log(id);
    wx.navigateTo({
      url: '../sign/sign?id=' + id
    })
  }
})