import Vuex from "vuex"
import Vue from "vue"
import xiamithing from "./modules/xiamiThings"
Vue.use(Vuex)

let store =new Vuex.Store({
	modules:[
		xiamithing
	]
});

export default store;