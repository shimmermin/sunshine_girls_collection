import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Index from '@/components/Index'

Vue.use(Router)

const routers=
  [
    {path: '/',
       name: 'login',
      component: Login//默认显示第一个链接
  },{
      path: '/Register',
       name: 'register',
      component: Register
    },{
      path: '/Login',
      name: 'login',
      component:()=>import('@/components/Login') //路由懒加载
    },{
      path: '/Index',
      name: 'index',
      component:()=>import('@/components/Index') //路由懒加载
    },{
      path: '/NavTab',
       name: 'nav_tab',
      component: ()=>import('@/components/NavTab') ,//路由懒加载
      children:[//二级路由
          {
            path: 'Index',//二级嵌套路由不用写斜杠
            name: 'index',
            component: ()=>import('@/components/Index') //路由懒加载

          },{
            path: 'Mall',
            name: 'mall',
            component: ()=>import('@/components/Mall') //路由懒加载

          },{
            path: 'Me',
            name: 'me',
            component: ()=>import('@/components/Me') //路由懒加载
          }


      ]
    },{
      path: '/First_Login',
       name: 'first_login',
      component: ()=>import('@/components/First_Login') //路由懒加载
    },{
      path: '/Model_Info',
      name: 'model_info',
      component:()=>import('@/components/Model_Info') //路由懒加载
    },{
      path: '/Goods',
      name: 'goods',
      component:()=>import('@/components/Goods') //路由懒加载
    },{
      path: '/Publish',
      name: 'publish',
      component:()=>import('@/components/Publish') //路由懒加载
    }



  ]

  export default routers


