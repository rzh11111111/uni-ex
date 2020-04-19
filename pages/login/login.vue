<template>
	<view>
		<button 
		open-type="getUserInfo"
		@getuserinfo="getInfo"
		>111</button>
		<button @click="getprovider">服务商</button>
		<button @click="getuser">获取用户信息</button>
		<button @click="login">登录</button>
		
		<!-- <view class="view-header_root" v-if="hasAuthorUrserInfo">
			<view>
				<image class="avatar-img" :src="userInfo.avatarUrl | formatAvatarUrl"></image>
			</view>
			<text>{{userInfo.userName | formatUserName}}</text>
		</view>
		<view class="view-header_root" v-else> -->
		<userInfoBtn @onClickBtn="onGetAuthData" >
					<section class="un-auth">
						<view>
							
						111
						</view>
						<text>uni-小程序</text>
					</section>
				</userInfoBtn>
		<!-- </view> -->
	</view>
</template>

<script>
	import userInfoBtn from '../../components/common/userInfoBtn.vue'
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			userInfoBtn
		},
		computed: {
			...mapGetters([
				'userInfo'
			])
		},
		methods:{
			getInfo(e){
				console.log(e)
			},
			onGetAuthData() {
			    	//授权成功后的回调事件
			    	console.log('success')
			    },
			getuser(){
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    console.log(loginRes.authResult);
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: function (infoRes) {
				        console.log('用户昵称为：' + infoRes.userInfo.nickName);
				      }
				    });
				  }
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
