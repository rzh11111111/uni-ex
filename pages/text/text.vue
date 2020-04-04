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
		<view class="box1"></view>
		<view class="box2"></view>
		<scroll-view scroll-x="true" style="white-space: nowrap;">
			<view style="display:inline-block; width:300rpx;height:100rpx;background: #007AFF;">A</view>
			<view style="display:inline-block;width:300rpx;height:100rpx;background:#008000;">b</view>
			<view style="display:inline-block;width:300rpx;height:100rpx;background:#2C405A;">c</view>
		</scroll-view>
		
		<view class="all">
			<view class="left">
				<view v-for="(item,index) in list" 
				:key="index" 
				@click="setId(index)"
				:class="{clickId:index===currentNum}"
				>
					{{item.title}}
				</view>
			</view>
			<view class="right">
				<scroll-view 
				:scroll-y="true" 
				style="white-space: nowrap;height: 200px;"
				:scroll-into-view="clickId"
				scroll-with-animation
				@scroll="scroll"
				>
					<view v-for="(item,index) in list" :key="index">
						<view class="title" :id="'po'+index">{{item.title}}</view>
						<view v-for="(it,idx) in item.list" :key="idx">
							{{it}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:
				[{title:"东",list:["a1","a2","a3","a4"]},
				{title:"西",list:["b1","b2","b3","b4"]},
				{title:"南",list:["c1","c2","c3","c4"]},
				{title:"北",list:["d1","d2","d3","d4"]}
				],
				clickId:'',
				currentNum:0
			};
		},
		onReady() {
			this.getNodesInfo()
		},
		methods:{
			test(e){//改变时轮播的index
				console.log(e.detail.current)
			},
			setId(index){
				this.clickId="po"+index;
				this.currentNum=index;
			},
			scroll(e){
				//拿到右边滚动scropptop的值
				console.log(e.target.scrollTop)
			},
			getNodesInfo(){
				//uni里面没有document和window
				const query = uni.createSelectorQuery().in(this)
				
				query.selectAll('.title').boundingClientRect(data=>{
					// console.log("得到布局位置信息"+ JSON.stringify(data))
					// console.log("节点离页面顶部的距离为"+data.top)
				}).exec((res)=>{
					//这个top是距离屏幕顶部的距离，不是容器顶部的距离
					console.log(res)
					let nodes=res[0]
					let rel=[]
					nodes.map(item=>{
						rel.push(item.top)
					})
					console.log(rel)
				})
			}
		}
	}
</script>

<style lang="scss">
.all{
	display: flex;
	.left{
		width: 100rpx;
		border: 1px solid red;
	}
	.right{
		flex:1;
	}
}
.clickId{
	background: #4CD964;
}
.box1{
	width: 100px;
	height: 100px;
	background: red;
}
.box2{
	width: 100rpx;
	height: 100px;
	background: yellow;
}
</style>
