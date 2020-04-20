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
			if(!res){
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
