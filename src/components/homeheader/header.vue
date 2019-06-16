<template>
    <div class="header">
        <div class="left">
            <router-link to="/start"><img :src="searchheaderimg" alt="" srcset=""></router-link></div>
        <div class="center">
            <search/>
        </div>
        <div class="right">
            {{this.$router.fullPath}}
            <router-link :to="{path:'/login',query: { url:this.$route.fullPath}}" v-if="!islogin">登陆</router-link>
            <div v-if="islogin"><img :src="headerimg" alt="" srcset=""></div>
        </div>
    </div>
</template>

<script>
import  search from "./search";
import  searchheaderimg from "../../assets/icon/homesear.png"
    export default {
        name:'homeheader',
        data(){
            return {
                searchheaderimg:searchheaderimg,
                headerimg:searchheaderimg,
                islogin:false,
            }
        },
        components:{
            search
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 6vh;
        line-height: 6vh;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        overflow: hidden;
        .left{
            width:20%;
            padding: 0 0.3rem 0 0.3rem ;
         }
         .right{
             width: 15%;
             padding: 0 0.3rem 0 0.3rem ;
         }
         .center{
             width: 65%;
             padding: 0.5rem 0;
         }
    }
</style>