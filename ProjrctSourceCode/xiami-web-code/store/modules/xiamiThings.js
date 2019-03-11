export default {
	state:{
		load:false
	},
	getters:{
		"getload":(state)=>{
			return state.load
		}
	},
	mutations: {
		"setload":(state,payload)=>{
			state.load=payload;
		}
	},
	actions: {
		setload(store,payload){
			store.commit("setload",payload)
		}
	},
}