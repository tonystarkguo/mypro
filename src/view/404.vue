<template>
    <div class="nopag">
        <mt-header class="noheader">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <h3>页面不存在哦</h3>
    </div>
</template>

<script>
    export default {
        name:"nopag",
    }
</script>

<style lang="scss" scoped>
    .noheader{
        z-index: 3;
        background-color: #ffe342;
    }
@keyframes fliear {
    0%{
        background-color: #f8f8f8;
        filter: blur(10px);
    }
    100%{
        background-color: yellow;
        filter: blur(0px);

    }
}
@keyframes nopagani {
    0%{
         top:0;
        opacity: 0;
    }
    25%{
       top:50vh;
        opacity: 1;
    }
    50%{
        top:50vh;
        opacity: 1;
    }
    75%{
       top:50vh;
        opacity: 1;
    }
    100%{
         top:50vh;
        opacity: 1;
    }
}
.nopag{
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    position: relative;
    background-image: url('http://47.101.130.9:90/41.jpg');
    h3{
        position: absolute;;
        margin: auto;
        opacity: 0;
        z-index: 3;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        // top: 50vh;
        animation: nopagani 1.5s ease 0.5s 1;
        animation-fill-mode: forwards;
    }
}
.nopag:after{
        content: "";
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background: inherit;
        animation: fliear 3s ease-in-out 0.5s 1;
        animation-fill-mode: forwards;
        z-index: 2;
    }
</style>