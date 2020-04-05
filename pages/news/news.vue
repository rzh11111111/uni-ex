<template>
	<view>
		<view>{{num}}</view>
		<button type="default" @click="addsss">321</button>
		<view>{{name}}</view>
		<view>数量:{{num}}</view>
		<view>价格:{{count}}</view>
		
		<button type="primary" @click="testActions">testActions</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:this.$store.state.name
			};
		},
		onLoad() {
			console.log('页面初始化，执行一次onLoad')
			this.testRequest()
			console.log(this.$store.state)
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
		},
		computed:{
			num(){
				return this.$store.state.num
			},
			count(){
				return this.$store.getters.count
			},
			testList(){
				console.log(this.$store.state.testList)
				return this.$store.state.testList
			}
		},
		methods:{
			async testRequest(){
				// uni.request({
				// 	url:'https://bird.ioliu.cn/weather',
				// 	data:{
				// 		city:'北京'
				// 	},
					
				// 	success:res=>{
				// 		console.log(res.data)
				// 	}
				// })
				let _this = this;
				var allParams = {
					url: 'weather?city=北京',//地址为Config.restUrl拼接地址 
					setUpUrl: true, //不需要拼接请设置为false 
					type: 'post', //请求类型
					sCallback: function (data) {
						console.log(data)
					},
					eCallback: function () {
					}
				};
				console.log(_this.$base)
				await _this.$base.request(allParams);
			},
			addsss(){ //改变vuex值
				this.$store.commit("add")
			},
			testActions(){
				this.$store.dispatch('testActions')
			}
		}
		
	}
</script>

<style lang="scss">

</style>
