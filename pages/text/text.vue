<template>
	<view>
		<swiper autoplay="true" @change="test">
			<swiper-item>
				1
			</swiper-item>
			<swiper-item>
				2
			</swiper-item>
			<swiper-item>
				3
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			test(e){//改变时轮播的index
				console.log(e.detail.current)
			}
		}
	}
</script>

<style lang="scss">

</style>
