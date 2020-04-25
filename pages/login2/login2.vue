<template>
	<view>
		<button type="primary" 
		open-type="getUserInfo" 
		@getuserinfo="getuserinfo"
		withCredentials="true"
		>微信登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			getuserinfo(en){
				console.log(en)
				
				if(!en.detail.iv){ //用户授权点了取消
					uni.showToast({
						title:'您取消了授权，登录失败',
						icon:'none'
					})
					return false;
				}
				//获取code
				uni.login({
					provider:'weixin',
					success:function(loginRes){
						console.log(loginRes)
						//获取sessionkey
						uni.request({
							url:'https://hoa.hcoder.net/xcxencode/?c=sk&appid=wxa492a534992cfb5a&secret=f3f0507acae14b85f35a60cd3995917d&code='+loginRes.code,//获取sessionkey接口
							success:function(res3){
								console.log(res3)
								//拿到加密后的res3.data.openid和res3.data.session_key
						
							//登录需要u_id(从1开始增加),u_openid(拿到),u_nickname(参数en里拿到),u_srand(后端随机生成)
							try{
								uni.setStorageSync('suid',1)
								uni.setStorageSync('srand',111111)
								uni.navigateBack();
							}catch(e){
								//sss
							}
							}
						})
					},
					fail:function(loginRes){
						console.log(loginRes)
					}
				})
			}
		}
		
	}
</script>

<style lang="scss">

</style>
