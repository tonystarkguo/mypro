<template>
    <div>
        <div class="small" v-if="showsmall">
            <div for="search" class="searc"><img :src="searchicon" alt="" srcset="">
            <span class="searchdiv"></span></div>
        </div>
        <div class="big" v-if="!showsmall">
            <mt-search  v-model="value"  cancel-text="取消"  placeholder="搜索">
            </mt-search>
        </div>
    </div>
</template>

<script>
import searchiconurl from "../../assets/icon/search.png"
    export default {
        name:"homeheadersearch",
        data(){
            return {
                value:"",
                showsmall:true,
                searchicon:searchiconurl,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .searc{
        text-align: left;
        >img{
            width:20px;
            display: inline-block;
            float:left;
            line-height: 3vh;
            height: 3vh;
            transform: translate(50%,30%);
        }
        :after{
            content: "搜索内容"
        }
        .searchdiv{
            background-color: #d1d1d1;
            display: block;
            padding-left: 40px;
            border-radius: 20px;
            height: 5vh;
            line-height: 5vh;
        }
    }
</style>