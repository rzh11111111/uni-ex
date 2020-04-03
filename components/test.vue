<template>
	<view>
		<text>我是test{{msg}}</text>
		<button type="default" @click="tests">testEvent</button>
	</view>
</template>

<script>
	export default {
		props:["msg"],
		data() {
			return {
				
			};
		},
		mounted() {
			console.log('挂在到实例上去之后调用');
			this.$nextTick(function(){
				console.log('渲染完毕')
			})
		},
		methods:{
			tests(){
				// this.$emit('testShowName',{name:'Mesa'})
				uni.$emit('testEmit',{name:'aaa'})
			}
		}
	}
</script>

<style lang="scss">

</style>
