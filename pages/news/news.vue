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
		onLoad() {
			console.log('页面初始化，执行一次onLoad')
		},
		onShow() {
			console.log('页面显示，执行一次onShow')
		},
		onReady() {
			console.log('页面加载完毕，执行一次onReady')
		},
		
		onHide() {
			console.log('页面隐藏，执行一次onHide')
		},
		onPullDownRefresh() {//需要在页面pages.json里开启下拉
		        // console.log('refresh');
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
					console.log('refresh1');
		        }, 1000);
		    },
		onTabItemTap(rel) { //点击tab进入这个页面时触发
			console.log('用户点击了tab',rel)
		},
		onShareAppMessage(rel) {
			console.log('分享',rel)
			return {
				title:'我是这个接最靓的仔',
				path:"pages/news/news",
				imageUrl:"https://www.baidu.com/img/bd_logo1.png"
			}
		}
		
	}
</script>

<style lang="scss">

</style>
