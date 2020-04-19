import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		num:0,
		price:10,
		name:'apple',
		testList:[],
		
		userInfo: {}
	},
	//全局同步方法
	mutations:{
		//this.$store.commit("add")调用
		add(state){
			state.num++
		},
		
		SET_USER_INFO: (state, userInfo) => {
		    	state.userInfo = userInfo
		    }
	},
	getters:{//计算属性
		count(state){
			return state.price*state.num
		},
		
		userInfo: state => state.userInfo
	},
	actions:{
		//this.$store.dispatch('testActions')调用
		testActions(context){
			//异步,context里面包含了state，mutations，getters，actions
			setTimeout(()=>{
				context.state.testList=['111','222']
			},2000)
		},
		
		// 缓存用户信息
		    setUserInfo({
		        commit
		    }, userInfo) {
		    	commit('SET_USER_INFO', userInfo)
		    }
	}
})