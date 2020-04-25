<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onShow:function(){
			var res =global.isLogin();
			console.log(res)
			if(res){
				uni.checkSession({
					success () {
					    //session_key 未过期，并且在本生命周期一直有效
						console.log('res=true')
					  },
					  fail () {
					    // session_key 已经失效，需要重新执行登录流程
						res=false
					    console.log('res=false')
						uni.showModal({
							title:'提醒',
							content:'请登录',
							success:function(en){
								console.log(en)
								if(en.confirm){
									uni.navigateTo({
										url:"/pages/login2/login2"
									})
								}else{
									uni.switchTab({
										url:"/pages/index/index"
									})
								}
								
							}
						})
					  }
				})
			}else{
				uni.showModal({
					title:'提醒',
					content:'请登录',
					success:function(en){
						console.log(en)
						if(en.confirm){
							uni.navigateTo({
								url:"/pages/login2/login2"
							})
						}else{
							uni.switchTab({
								url:"/pages/index/index"
							})
						}
						
					}
				})
			}
			
			
			
		}
	}
</script>

<style lang="scss">

</style>
