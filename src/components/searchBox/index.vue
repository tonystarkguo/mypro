<template>
  <div class="searchBox" v-show="isShow">
    <div class="search-index-box">
      <span>搜索:目的地/酒店/景点/航班号</span>
    </div>

    <div class="notice-myctrip">
      <router-link to="/login"><span>登录</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBox',
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style  scoped lang="scss">
  .searchBox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
    position: fixed;
    top:0px;
    transform: translateX(-50%);
    left: 50%;
    z-index: 5;
    padding-left: 12px;
    transition: all 0.2s;
    .search-index-box{
      background-color: #fff;
      color: #666;
      padding: 2px 5px;
      border-radius: 15px;
      font-size: 15px;
      position:relative;
      height: 28px;
      line-height: 25px;
      flex: 1;
      span{
        padding-left: 35px;
      }
      span:after{
        position: absolute;
        top: 0;
        left: 0;
        width: 35px;
        height: 100%;
        overflow: hidden;
        background: url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png) no-repeat;
        background-size: 21px auto;
        background-position: 15px 7px;
        content: "";
      }

    }
    .notice-myctrip{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      color: #fff;
      font-size: 12px;
      width: 51px;
      height: 44px;
      line-height: 1;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-right: 4px;
      a{
        text-decoration:none;
        color:#fff;
        -webkit-tap-highlight-color:transparent
      }
      span:before{
        content: "\0020";
        width: 22px;
        height: 22px;
        background: url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png) no-repeat;
        background-size: 21px auto;
        background-position: 1px -36px;
        margin-bottom: 3px;
        margin-top: 5px;
        display: block;
      }
    }
  }

</style>
