<template>
    <div>
        LoginPage
    </div>
</template>

<script>
    import utils from '../utils';
    import config from '../AppConfig';
    export default {
        name: "Login",
        data() {
            return {}
        },
        beforeCreate() {
            console.log('login');
            let ua = window.navigator.userAgent.toLowerCase();
            console.log(ua ,'ua');
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                //如果是微信端，验证参数是否存在code
                let code = utils.getUrlParam('code');
                if(code){
                    //根据code获取用户信息
                }else{
                    let redirect_uri = encodeURIComponent(config.redirect_uri);
                    //跳转到授权页
                    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
                        'appid=' +config.appid +
                        '&redirect_uri=' + redirect_uri +
                        '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
                    alert(url);
                    window.location.href=url;
                }
            }
            //如果h5也需要登录，就可以在当前写页面
        }
    }
</script>

<style scoped>

</style>
