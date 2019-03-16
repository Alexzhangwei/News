//index.js
//获取应用实例
import {listData} from '../../data/data.js'
var app = getApp()
Page({
  data: {
    flag: 0,
    userInfo: {},
    news:null
  },
  onLoad: function () {//加载的时候
    //加载news组件数据
    this.setData({
      news: listData
      // todaynews: todaynewsData
    })
    // console.log(this.data.news+"news")
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  //选择哪个nav条，比如北京，社会等
  switchNav: function (e) {
    //拿到id值
    var id = e.target.id;
    var page = this;
    //判断：如果这个swiper的flag值==id值，说明就不进行任何切换了
    if (this.data.flag == id) {
      return false;
    } else {
      //设置值，修改值 setDate    如果swiper进行改变，nav被选中的id也发生改变  
      page.setData({
        flag: id
      });
    }
  },
  //跳转到详情页面
  seeDetail:function(){
    //路由中的wx.navigateTo(Object object)
    // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面
    wx.navigateTo({
      url: '../detail/detail',
    })
  }

})
