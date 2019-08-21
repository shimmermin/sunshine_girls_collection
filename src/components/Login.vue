<template>
  <div id="login">
         <div id="logo">
               SunShine Girls Collection
            </div>
         <div class="input">
                    <div >  <input id="uname" class="input_box" type="text" placeholder="用 户 名">
                    </div>
              
                      <div > <input id="upass" class="input_box" type="password" placeholder="密  码">
                     </div>
        
                     
                      <button type="button" id="btn1">登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录</button>
                      <router-link class="link" to="/Register">去注册</router-link>
                       <div>
                          <router-view></router-view>
                       </div>
              </div>
    </div>   
</template>
<script>
export default {
 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#logo {
  padding-top: 80px;
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
   width: 160px;
   margin-top: 40px;
   padding-top: 7px;
   padding-bottom: 7px;
   background-color:    #8B4513; /*背景透明*/
   opacity:0.7;/*设置透明度*/
   border-radius: 8px;/*圆角按钮*/
   border: 1px solid      #A0522D; /*边框样式 */
   font-size: 20px;
   font-family: "Microsoft YaHei";
   color:       #FFFFFF;
   font-weight:500;
}

.link{
  font-size: 18px;
  color:      #B0C4DE;
  font-family: "Microsoft YaHei";
}

</style>