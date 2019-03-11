import Vue from 'vue'
import Router from 'vue-router'
import welcomeBox from '../components/discover/welcomeBox'
import discover from '../pages/discover'
import myMusic from '../pages/myMusic'
import play from '../pages/play'
import musicBlog from  '../pages/musicBlog'
import  personalPage from '../pages/personalPage'
import loginAndReg from '../pages/loginAndReg'
import tuijian from "../components/discover/tuijian";
import yueku from "../components/discover/yueku";
import mv from "../components/discover/mv";
import focus from "../components/discover/focus";
import dongtai from "../components/musicBlog/dongtai";
import party from "../components/musicBlog/party";
import collects from "../pages/collects"


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',     redirect: '/d'  },
		{
			path: '/d',
			component: discover,
			children:[
				{path:"/",component:tuijian},
				{path:"/tuijian",component:tuijian},
				{path:"/yueku",component:yueku},
				{path:"/mv",component:mv},
				{path:"/focus",component:focus}
			]
		},
		{
			path: '/my',
			name: 'myMusic',
			component: myMusic
		},
		{
			path: '/play',
			name: 'play',
			component: play
		},
		{
			path: '/blog',
			component: musicBlog,
			children:[
				{path:"",component:dongtai},
				{path:"dt",component:dongtai},
				{path:"party",component:party},

			]
		},
		{
			path: '/me',
			name: 'personalPage',
			component: personalPage
		},
		{
			path: '/log',
			name: 'loginAndReg',
			component: loginAndReg
		},
		{
			path: '/collects',
			name: 'collects',
			component: collects
		},
	]
})
