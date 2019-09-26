<template>
    <div class="shopCatLin">
        <div class="item-info">
          <div class="p-checkbox">
            <input type="checkbox" >
          </div>
          <div class="p-goods">
            <img :src="url" alt="商品">
          </div>
          <div class="p-content">
            <div class="p-new-price">
              <!--单价-->
              <div>
                <p>商品名称及内容</p>
                <p class="red"> {{shopPrice|showPrice(shopPrice)}}</p>
              </div>
            </div>
            <div class="p-quantity">
              <!--计步器-->
              <h3 class="red">{{shopPrice*shopNum|showPrice(shopPrice*shopNum)}}</h3>
              <span @click="addOrReduce(false,shopId)">-</span><input type="number" class="inputShopNum" :value="shopNum" @input="UpshopNum($event)"><span  @click="addOrReduce(true,shopId)">+</span>
            </div>
            <!--<div class="p-sum">-->
            <!--</div>-->
          </div>
        </div>
     </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    url: {
      type: String,
      required: true
    },
    shopNum: {
      type: Number,
      default: 0
      // default: function () {
      //   return {number:1}
      // }
    },
    shopPrice: {
      type: Number,
      default: 0
    },
    shopId: {
      required: true
    }
  },
  filters: {
    showPrice (money) {
      return '¥' + money.toFixed(2)
    }
  },
  methods: {
    addOrReduce (val, shopId) {
      this.$emit('propChangeNum', val, shopId)
    },
    UpshopNum ($event) {
      console.log($event.target.value)
      let value = parseFloat($event.target.value)
      if(value){
        this.$emit('update:shopNum', value)
      }

    }
  },
  components: {
    shopNumVal () {
      return this.shopNum
    }
  }
}
</script>

<style scoped lang="scss">

.item-info{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 5px;

  .p-checkbox{
    flex-grow: 0.6;
  }
  .p-content{
    flex-grow: 2;
  }
  .p-goods{
    display: flex;
    flex-grow: 1;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    img{
      margin: auto;
    }
  }
  .p-quantity{
    vertical-align: center;
    span{
      cursor: pointer;
      display: inline-block;
      min-width:30px;
      line-height:20px;
      border: 1px solid #e0e0e0;
      vertical-align: center;
      margin:0 5px;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    input{
      width:10%;
      line-height:18px;
      padding: 0;
      vertical-align: center;
      text-align: center;
    }
  }
}
.item-info:hover{
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 4px;
}
  .p-content{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items:center;
    .p-quantity{
      align-content: center;
      h3{
        display: inline-block;
      }
    }
  }

  .red{
    color: #f20c00;
  }
</style>
