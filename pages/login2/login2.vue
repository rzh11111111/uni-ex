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
			}
		}
		
	}
</script>

<style lang="scss">

</style>
