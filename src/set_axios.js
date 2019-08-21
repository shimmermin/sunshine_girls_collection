import axios from 'axios'
import store from '@/store/index_vuex.js'
import routers from '@/router/routers.js'

//http全局拦截
//请求拦截：用户名、密码等信息加在请求头里
export default function setAxios(){
	axios.interceptors.request.use(
		config=>{
			if(store.state.username&&store.state.password){
				config.headers.common['Username']=store.state.username
				config.headers.common['Password']=store.state.password
			}
			return config
		}
	)

//响应拦截
	axios.interceptors.response.use(
		response=>{
			if(response.status==200)
			{
				console.log('请求成功')
				//还可以判断其他状态码时显示的内容，
				//以及登录过期时,清空vuex、localStorge的信息
			}
			return response//必须写返回，不然接不到数据
		}
	)
}