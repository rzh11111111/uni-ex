<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<van-button type="default">默认按钮</van-button>
		</view>
		<test :msg="msg" @testShowName="testEvent"></test>
	</view>
</template>

<script>
	import test from '../../components/test.vue'
	export default {
		data() {
			return {
				title: 'Hello uniapp',
				msg:'Msea'
			}
		},
		onLoad() {
			uni.$on("testEmit",rel=>{
				console.log(rel)
			})
		},
		components:{
			test
		},
		methods: {
		testEvent(rel){
			console.log(rel)
		}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
