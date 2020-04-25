
<script>
	// import { AppModel } from './api/app.js'
	// const appModel = new AppModel()
 
	global.isLogin=function(){
		try{
			var suid = uni.getStorageSync('suid')
			var srand = uni.getStorageSync('srand')
			if(suid == '' || srand == ''){
				return false;
			}else{
				return [suid,srand];
			}
		}catch(e){
			
		}
		
	}
	export default {
		onLaunch: function(option) {
			console.log('App Launch',option)
		},
		onShow: function() {
			console.log('App Show')
			// this.getLogin()
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
		    getLogin() {
		        uni.login({
		            success: function(res) {
						console.log('登陆成功',res)
		                if (res.code) {
		                    // appModel.login({
		                    //     code: res.code
		                    // }).then(response => {
		                    //     this.$store.dispatch('setUserInfo', response.data)
		                    //     //这里存储了之后，等再进入小程序获取数据或其它的Api交互时，就可以带上放在header头中去向服务端发起请求
		                    //     uni.setStorageSync('AuthTokens', response.data.token)
		                    //     uni.login({
		                    //         success(response) {
		                    //             uni.setStorageSync('wxCode', response.code);
		                    //         }
		                    //     })
		                    // }).catch(errors => {
		                    //     console.error(errors)
		                    // })
		                }
		            },
		            fail: function() {
		                uni.showToast({
		                    title: '微信登录失败',
		                    icon: 'none'
		                })
		            }
		        });
		    }
		}

	}
</script>

<style>
	/*每个页面公共css */
	@import "/wxcomponents/vant/common/index.wxss";
</style>
