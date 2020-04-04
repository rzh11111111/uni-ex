import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		num:0,
		price:10,
		name:'apple'
	},
	//全局同步方法
	mutations:{
		//this.$store.commit("add")调用
		add(state){
			state.num++
		}
	},
	getters:{//计算属性
		count(state){
			return state.price*state.num
		}
	},
	actions:{
		//this.$store.dispatch('testActions')调用
		testActions(context){
			//异步,context里面包含了state，mutations，getters，actions
			console.log(context)
		}
	}
})