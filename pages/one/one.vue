<template>
	<view>
		one
		<button type="default" @click="toPath">toTwo</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		        console.log(option.id); //打印出上个页面传递的参数。
		        console.log(option.name); //打印出上个页面传递的参数。
		    },
		methods:{
			toPath(){
				uni.navigateTo({
					url:"../two/two"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
