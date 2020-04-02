<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<van-button type="default">默认按钮</van-button>
		</view>
		<test :msg="msg" @testShowName="testEvent"></test>
		<!-- indexOf微信小程序原生不可以，uni可以 -->
		<!-- <view :class="{box111:true}">{{msg.indexOf('sea')!==-1?"最靓的崽":"NO"}}</view> -->
					<!-- 动态添加属性 -->
		<view :class="['box111','box222']">{{msg.indexOf('sea')!==-1?"最靓的崽":"NO"}}</view>
		<view v-for="(item,index) in names" :key="index">
			{{item}}
		</view>		
	</view>
</template>

<script>
	import test from '../../components/test.vue'
	export default {
		data() {
			return {
				title: 'Hello uniapp',
				msg:'Msea',
				names:['lili','luce','haha','feifei','feifei2','feifei32','feifei4']
			}
		},
		onLoad() {
			uni.$on("testEmit",rel=>{ //uni提供的方法，可以多次调用
				console.log(rel)
			})
			// uni.$once("testEmit",rel=>{ //uni提供的方法，只能调用一次
			// 	console.log(rel)
			// })
		},
		components:{
			test
		},
		methods: {
		testEvent(rel){
			console.log(rel)
		}
		},
		onPageScroll(rel) {
			console.log('页面滚动',rel)
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
	.box111{
		width: 200rpx;
		height: 50rpx;
		border: 1px solid green;
	}
	.box222{
		width: 200rpx;
		height: 50rpx;
		border: 1px solid red;
	}
</style>
