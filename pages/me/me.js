var app = getApp();
Page({
  data: {
    userInfo: {},
    isShow:true
  },
  onLoad: function() {
    this.getuser();
    },
    getuser(){
      // 查看是否授权
      wx.getSetting({
        success:(res)=> {
          console.log(res);
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) =>{
                console.log(res.userInfo)
                console.log("成功");
                this.setData({
                  isShow:false
                })

                //用户已经授权过
              }
            })
          }else{
            console.log("失败")
            this.setData({
              isShow:true
            })
          }
        }
      })
      var page = this;
      //拿到userInfo的信息
      if (app.getUserInfo) {
        console.log('有函数')
      }
      //获取用户信息
      wx.getUserInfo({
        success: (res) => {
          //解构赋值
          let {
            userInfo
          } = res;
          this.setData({
            userInfo: res.userInfo
          })
        },
        fail: (res) => {
          console.log("调用了失败的回调");
        }
      });

    },
  
 
 
  //绑定的是否登录授权的事件
  isGetinfo(data) {
    if (data.detail.rawData) {
      //点击了允许
      console.log("允许");
      this.getuser();

    } else {
      //点击了不允许
      console.log("不");
    }
  },




  setup: function() {
    wx.navigateTo({
      url: '../setup/setup',
    })
  }

})