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
		onLoad(po) {
			console.log(po)
		},
		methods:{
			tests(){
				this.$emit('testShowName',{name:'Mesa'})
			}
		}
	}
</script>

<style lang="scss">

</style>
