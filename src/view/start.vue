<template>
    <div class="start">
        <div class="bgdiv"></div>
        <div class="strContent">
          <div class="strList" v-for="(item,index) in aside " :key=index >
          <p class="first-words">
            {{item.test}}
          </p><address class="first-words">{{item.author}}</address>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'start',
  data () {
    return {
      aside: [{test: '你是惊蛰的一声蝉鸣，苏醒了忽明忽暗的云。你是六月的柠，青涩了整个夏天。你是江南的杏花，也是我唯一的归途，更是我荒野辽阔的星，十七岁许愿的石子，画卷最后一抹的红，醒木里那个相忘江湖最后成为执念的她。', author: '——出自网易云热评《起风了》'}]
    }
  }
}
</script>

<style scoped lang="scss">
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
      opacity: 0; /*中间状态 透明度为0*/
    }
    100% {
      opacity: 1; /*结尾状态 透明度为1*/
    }
  }
  .start{
    height: 100%;
    .bgdiv{
      background-image: url("http://47.101.130.9:90/34.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 100%;
      position: relative;
      filter: blur(5px);
      }
    .strContent{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      color:white;
      font-size: 22px;
      .strList{
        height: 100%;
        width: 100%;
      }
      p{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        text-justify: inter-word;
        text-transform: capitalize;
        writing-mode: vertical-lr;
        /*line-height: 55px;*/
        /*line-height:15vw;*/
        letter-spacing: 5px;
        height: 90%;
        margin-top: 10%;
        display: inline-block;
        text-indent:20px
      }
      .first-words {
        opacity: 0;
        animation: fade-in 2s ease 0s 1;
        /*规定动画的最后状态为结束状态*/
        animation-fill-mode: forwards;
      }
      address{
        writing-mode: vertical-lr;
        display: inline-block;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        text-justify: inter-word;
        text-transform: capitalize;
        -webkit-writing-mode: vertical-lr;
        -ms-writing-mode: tb-lr;
        writing-mode: vertical-lr;
        /*line-height: 55px;*/
        letter-spacing: 5px;
        height: 90%;
        margin-top: 10%;
      }
    }
    }
</style>
