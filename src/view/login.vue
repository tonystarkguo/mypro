<style lang="scss" scoped>
    .login{
        background-color: #f8f8f8;
        height:100%;
        width: 100%;
        .header{
            background-color: #f8f8f8;
            color:#2c3e50;
        }
    }
    .content{
        .headerimg{
            height: 20vh;
            line-height: 20vh;
            >div{
                margin-top:10vh;
                margin-bottom:5vh; 
                height: 10vh;
                width: 10vh;
                padding: 0.6rem;
                border: 1px  solid #d1d1d1;
                border-radius: 5px;
                margin-left: auto;
                margin-right: auto;
               overflow: hidden;
            }
            img{
                display: block;
                 max-width: 100%;
            }
        }
        .loginbtn{
            margin-top:5vh;
            width:90vw;
            margin-left:auto;
            margin-right:auto;
            border-color: #e86b0f;
            color: white;
            background: #ff8200;
        }
        footer{
            margin-top:5vh;
            a{
                text-decoration: none;
                margin-left:3vw;
                margin-right:3vw;
            }
        }
    }
</style>
<template>
    <div class="login">
        <mt-header class="header">
            <router-link :to="{path:this.$route.query['url']||'/home'}" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="headerimg">
                <div>
                    <img src="http://47.101.130.9:90/45.jpg" alt="头像">
                </div>
            </div>
            <form autocomplete="true">
                <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
                <mt-button size="large" class="loginbtn" @click="btnlogin">登陆</mt-button>
            </form>
            <footer><router-link to="/reg"><span>注册账号</span></router-link><span>|</span><router-link to="/iforgot"><span>忘记密码</span></router-link></footer>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
    export default {
        name:"login",
        data () {
            return {
                username:"test",
                password:"12345",
            }
        },
        methods:{
            btnlogin(e){
                e.preventDefault();
                if(!this.username){
                    Toast('输入账号');
                    return 
                }
                if(!this.password){
                    Toast('输入密码');
                    return 
                }
                /* 登陆 */
            },
            topath(e){
                e.preventDefault();
                const {url="/home"}=this.$route.query;
                this.$route.path({path:url});
            }
        }

    }
</script>

