import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//创建Vuex实例
const store=new Vuex.Store({
	state:{
		username:'',
		password:'',
		cart:[]
	},
	mutations:{
		set_username(state,username){
			state.username=username
		},
		set_password(state,password){
			state.password=password
		},
		addToCart(state,goods){
			var mall_goods={}
			mall_goods.image=goods.image
			mall_goods.info=goods.info
			mall_goods.num=1
			mall_goods.price=goods.price
			mall_goods.introduce=goods.introduce
			mall_goods.checked=false
			mall_goods.tag=goods.tag
			state.cart.push(mall_goods)
			
		}
	},
	actions:{

	},
	getters:{

	}

})

export default store //导出store