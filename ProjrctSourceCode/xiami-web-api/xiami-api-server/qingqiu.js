import axios from 'axios'
export default{
	getTui(name,path,obj){
		axios.get("http://127.0.0.1:888/"+path).then((res) => {
			obj[name]=res.data;
			// console.log(res.data)
		})

	}
}
