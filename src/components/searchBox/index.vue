<template>
<div class="searchBox" v-show="isShow">
  <div class="search-index-box"></div>
  <div class="user-header"></div>
</div>
</template>

<script>
  export default {
    name: 'searchBox',
    props:{
      isShow:{
        type: Boolean,
        default:true,
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped type="scss">
.searchBox{

}
</style>
