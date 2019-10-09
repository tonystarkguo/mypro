<template>
    <div class="shopCart">
      <transition-group name="shopfade">
        <shop-inline @propChangeNum="changeShowNum"  v-for="(value) in shopList"  :shopId="value.shopId" :key="value.shopId" :shopPrice="value.shopPrice" :shopNum.sync="value.shopNum"  :url="value.url"></shop-inline>
        <div class="p-showTotalPrice">
          <div class="p-checkAll">
            <label ><input type="checkbox" @click="selectAll">全选</label>
          </div>
          <div class="p-priceShow">{{showAllPrice}}</div>
          <div class="p-Settlement">
            <mt-button type="danger"  @click.native="handleClick">去结算</mt-button>
          </div>
        </div>
      </transition-group>
    </div>
</template>

<script>
import shopInline from '../components/shoppingCart/index'
export default {
  name: 'shoppingCart',
  data () {
    return {
      isCheckAll: true,
      shopList: [{
        url: 'https://img10.360buyimg.com/cms/s80x80_jfs/t1/60587/29/6630/107036/5d4b7853E4fab3807/038a7613f349c970.jpg',
        shopPrice: 100,
        shopNum: 1,
        shopId: 1
      },
      {
        url: 'https://img10.360buyimg.com/cms/s80x80_jfs/t1/60587/29/6630/107036/5d4b7853E4fab3807/038a7613f349c970.jpg',
        shopPrice: 300,
        shopNum: 2,
        shopId: 2
      }]
    }
  },
  components: {
    shopInline
  },
  methods: {
    changeShowNum (val, shopId) {
      console.log('val', val, shopId)
      this.shopList.forEach(value => {
        if (value.shopId === shopId) {
          if (val) {
            value.shopNum += 1
          } else {
            if (value.shopNum > 1) {
              value.shopNum -= 1
            }
          }
        }
      })
    },
    handleClick () {
      console.log('提交')
    },
    selectAll ($event) {
      if ($event.target.value) {

      } else {

      }
    }
  },
  computed: {
    showAllPrice () {
      let value = 0
      this.shopList.forEach(val => {
        value = val.shopPrice * val.shopNum + value
      })
      return '¥ ' + value
    }
  }
}
</script>

<style  lang="scss" scoped>
  shopfade-enter-active {
    transition: all 3s ease;
  }
  .shopfade-leave-active {
    transition: all 3s ease;
  }
  .shopfade-enter, .shopfade-leave-to
  {
    transform:rotate(90deg);
    opacity: 0;
  }

  .p-showTotalPrice{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /*position: fixed;*/
  position: relative;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  padding: 5px;
  /*height: 5vh;*/
  /*width: 99%;*/
}

.p-checkAll{
  flex-grow: 1;
}
.p-priceShow{
  flex-grow: 2;
}
.p-Settlement{
  flex-grow: 1;
  text-align: right;
}
</style>
