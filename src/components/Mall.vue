<template>
<div id="mall">
	<div id="head_text">
      购&nbsp&nbsp&nbsp&nbsp物&nbsp&nbsp&nbsp&nbsp车
      <van-divider :style="{ color: ' #FFFFF0', borderColor: '  #FFFFF0', }">
      </van-divider>
      <div id="manage_mall">
          <cube-button :outline="true"  :inline="true"   class="manage_mall" @click="clearCart" color=" #FF6347">清空购物车</cube-button>
          <cube-button :outline="true"  :inline="true" class="manage_mall">管理</cube-button>
      </div>
  </div>
	<div id="scroll">
		<cube-scroll class="scroll_panel">
	            <ul id="panel1">
	                <li v-for="(tag,index) in tags" :key="index" id="panel2" >
								 <van-checkbox v-model="tag.checked" checked-color="  #FF8C00" id="check_box" @click="mountPrice(index)"></van-checkbox>
                <van-card class="card"
                      :desc="tag.introduce"  
                      :title="tag.info"
                      :thumb="tag.image"
                    >
                      <div slot="tags">
                        <van-tag plain type="danger">{{tag.tag}}</van-tag>
                       
                      </div>
                      <div slot="footer">
                        <van-icon name="plus" @click="addNum(index)"/>
                        <button id="num">{{tag.num}}</button>
                         <van-icon :name="remove_icon" @click="remove_Num(index)"/>
                        <label id="price">￥{{tag.price}}</label>
                      </div>
                </van-card>
					       </li>
				      </ul>
		</cube-scroll>
	</div>
	<div id="mount"> 
		合计：<label id="mount_price" >￥{{mount_Price}}</label>
		<van-button round type="danger" id="btn" size="small">去结算</van-button>
	</div>
</div>
</template>
<script>

export default{
	data  () {

    return{
      mount_Price:0,
      remove_icon:require('../img/remove_num.jpg'),
    	tags:[]
      
    }

  },
  created(){
     //取出的时候，注意要用Json.parse解析
        var a=[]
        a=JSON.parse(window.localStorage.getItem("cart_Array"))
        console.log(a)
        this.tags=a
   // var self=this
   // self.$store.commit('addToCart',carts_)//必须使用self，否则会出现this的指向出现问题
    
  },
  methods:{
  		addNum(index){
         //数量增加
          this.tags[index].num++;
          //重新计算价格
          var price=0;
          for(let i=0;i<this.tags.length;i++){
            if(this.tags[i].checked==true){
              price=price+this.tags[i].num*this.tags[i].price;
            }
          }
          this.mount_Price=price;
      },
      remove_Num(index){
          //数量增加
          this.tags[index].num--;
          //重新计算价格
          var price=0;
          for(let i=0;i<this.tags.length;i++){
            if(this.tags[i].checked==true){
              price=price+this.tags[i].num*this.tags[i].price;
            }
          }
          this.mount_Price=price;
      },
      //点击复选框，重新计算价格
      mountPrice(index){
        this.tags[index].checked=!this.tags[index].checked
        var price=0;
        for(let i=0;i<this.tags.length;i++){
          if(this.tags[i].checked==true){
            price=price+this.tags[i].num*this.tags[i].price;
          }
        }
        this.mount_Price=price;

      },
      clearCart(){
        window.localStorage.removeItem("cart_Array")
        this.tags=null
        this.mount_Price=0
      }
     
  	}
  
}

</script>
<style scoped>
#mall{
	background-color:   #F5DEB3;
}
#scroll{
	height: 600px;
}
#head_text{
  background-color:   #F5DEB3;
	color:     #000000;
	font-size: 20px;
	padding-top: 15px;
 
}
#check_box{
  padding-right: 10px;
}
#panel2{
	margin-bottom: 5px;
	border-radius: 7px;
	margin-left: 5px;
	margin-right: 5px;
  display: flex;
}
.card{
  width:100%;
  margin-right: 10px;
  height: 115px;
}
#num{
  background: transparent;
  width: 30px;
  border-radius: 5px;
}
#price{
  color:  #FF4500;
  margin-left: 20px;
}
#mount{
  background-color:   #F5DEB3;
	position:fixed;
  display: flex;
  align-items: center;
	bottom:45px;
 	z-index: 999;/*层叠顺序，数值越高越靠前*/
  height:55px;
 	width:100%;
  padding-left: 60px;
}
#mount_price{

  margin-right:90px;
  color:  #FF0000;
}
#btn{
  font-size: 15px;
}
#manage_mall{
 
  padding-left: 100px;
}
.manage_mall{
  width: 100px;
  height:30px;
  margin-right: 20px;
  font-size: 15px;
  color:  #FA8072;
  outline-color:  #FA8072;
}
</style>