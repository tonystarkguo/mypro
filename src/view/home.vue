<template>
  <div class="home">
    <searchBox/>
    <div class="sliper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="//47.101.130.9:90/32.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="//47.101.130.9:90/36.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="//47.101.130.9:90/34.jpg" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="content">
      <div>
        <div>
          <div>
            <img src="https://dimg02.c-ctrip.com/images/100t0l000000d61ht687A.png" alt srcset>
            <p>景点</p>
          </div>
        </div>
        <div>
          <img src="https://dimg02.c-ctrip.com/images/10020l000000ddw8hB633.png" alt srcset>
          <p>酒店</p>
        </div>
        <div>
          <img src="https://dimg02.c-ctrip.com/images/100u0l000000d6wtm2B89.png" alt srcset>
          <p>购物</p>
        </div>
        <div>
          <img src="https://dimg02.c-ctrip.com/images/10080l000000d6zyl18A3.png" alt srcset>
          <p>门票</p>
        </div>
      </div>
      <div class="activity">
        <div>
          <i></i>
          <p>攻略</p>
        </div>
        <div><i></i>
          <p>游记</p></div>
        <div><i></i>
          <p>问达人</p></div>
        <div><i></i>
          <p>当地玩乐</p></div>
      </div>
    </div>
    <div class="end">
        <h4>*  推荐 *</h4>
        <div class="morelist">

        </div>
    </div>
  </div>
</template>

<script>
import homeheader from '../components/homeheader/header';
import searchBox from"../components/searchBox/index"
export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    homeheader,
    searchBox
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  .sliper {
    width: 100%;
    height: 30vh;
    img {
      width: 100%;
      height:100%;
    }
  }
  .activity{
      i{
        display: block;
       width: 3rem;
        height: 3rem;
        background-image: url("https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png");
        background-repeat: no-repeat;
        background-size: 12rem;
        background-position: 1px 0;
        margin: auto;
      }
      >:nth-child(2)>i{
           background-position:-8.9rem -3rem;
      }
      >:nth-child(3)>i{
           background-position: -5.9rem -3rem;
      }
      >:last-child>i{
           background-position: -8.9rem 0rem;
      }
  }
}
.content {
    padding-top: 0.5rem;
  > div {
    // width: 25%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    justify-items: center;
    align-content: center;
    align-items: center;
    text-align: center;
    height: 15vh;
    > div {
      width: 25%;
      p{
          padding-top: 0.5rem;
      }
      img {
       width: 3rem;
        height: 3rem;
        margin: auto;
      }
    }
  }
}
</style>
