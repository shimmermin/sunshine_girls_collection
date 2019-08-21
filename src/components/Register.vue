<template>
  <div >
      <div id="logo">
         SunShine Girls Collection
      </div>
     <div class="input"> 
                <div >  <input id="uname" class="input_box" type="text"  v-model="uname" placeholder="用 户 名">
                </div>
         
                  <div > <input id="upass" class="input_box" type="password" v-model="upass"  placeholder="密  码">
                 </div>
    
                  <div > <input id="checkpass" class="input_box" type="password" v-model="checkpass" placeholder="请 确 认 密 码">
                  </div> 
                  <button type="button" id="btn1" @click="handleRegister" >注&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp册</button>
          </div>
   </div>    
</template>
<script>

export default {

  data  () {

    return{
      uname:'',
      upass:'',
      checkpass:'',
    }

  },
  beforeCreate:function(){
    //防止页面刷新时vuex里的数据为空
    var u=window.localStorage.getItem("new_username")
    var p=window.localStorage.getItem("new_password")
    var self=this
    self.$store.commit('set_username',u)//必须使用self，否则会出现this的指向出现问题
    self.$store.commit('set_password',p)
  },
  methods:{
    handleRegister (e) {
      e.preventDefault()
      //console.log(this.model)
      //then方法内部不能使用this，因为this没有被绑定
      var self=this
      this.$axios
    .get('/api/index')
    .then(function(res){
      //用户注册验证
     console.log(res)
     let user_length=res.data.userInfo.length
    
      
      //遍历json数组，看是否已经注册过
      let is_member=false
      for(let i=0;i<user_length;i++){
        if(self.uname==res.data.userInfo[i].username){
          is_member=true
          alert('该用户已经注册过了')
        }
      }
      //如果是新用户，把新用户信息放入localStorge中，注册成功后直接登录
      if(is_member==false){
         self.$store.commit('set_username',self.uname)//必须使用self，否则会出现this的指向出现问题
         self.$store.commit('set_password',self.upass)
          window.localStorage.setItem("new_username",self.uname)
          window.localStorage.setItem("new_password",self.upass)
          alert('注册成功')
          self.$router.replace('/First_Login')

        }
    })
    //以上方法有bug，缺少新用户数据写入json文件的过程:可以先写入localStorge，然后localStorge写入MOCK数据中
    }

  }
    
 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  padding-top: 70px;
  font-size: 25px;
  padding-bottom: 60px;
  color:  #F5F5F5;
  font-family: "Microsoft YaHei";
}
.input{  
    
    padding-top: 10px;
    padding-bottom: 15px;
    background-color: transparent; /*背景透明*/
    border: 2px solid rgba(255,255,255,0.3); /*边框半透明*/
    box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.2);  /*内外渐变阴影*/
}
::-webkit-input-placeholder { /* WebKit browsers */
  color:      #D3D3D3;
  font-size: 18px;
  font-family: "Microsoft YaHei";
}
.input_box{
  
  font-size: 18px;
  width: 315px;
  margin-top: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 7px;
  background-color: transparent; /*背景透明*/
  box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.2);  /*内外渐变阴影*/
}

#btn1{
   width: 200px;
   margin-top: 40px;
   padding-top: 7px;
   padding-bottom: 7px;
   background-color:    #8B4513; /*背景透明*/
   opacity:0.7;/*设置透明度*/
   border-radius: 8px;/*圆角按钮*/
   border: 1px solid      #A0522D; /*边框样式 */
   font-size: 20px;
   font-family: "Microsoft YaHei";
   color:   #FFFFFF;
   font-weight:500;
}

</style>