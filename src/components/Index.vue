<template>
 
	<div id='index'>
    <div id="logo">
       SunShine Girls Collection
    </div>
		<!--轮播图-->
    <div id="slide">
  		<cube-slide ref="slide" :data="items" @change="changePage">
    		  <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
    		  
    		      <img :src="item.src">
    	
    		  </cube-slide-item>
      </cube-slide>
    </div>
    <div class="search_model">搜&nbsp&nbsp索:
        <input type="text" name="search" class="inp" placeholder="模特昵称：Anna" >
          <i class="cubeic-search"></i>
        </input>
    </div>    
    <div id="panel">
        <cube-scroll class="scroll_panel">
            <ul id="panel1">
                <li v-for="(tag,index) in tags" :key="index" id="panel2" @click="clickModel(tag,index)">
                  <img :src="tag.image" alt="" class="model">
                  <p class="info">{{tag.info}}
                    <van-icon name="like-o" class="like"/>
                    <span class="likeNum">{{tag.likeNum}}</span>
                  </p>
                  <label class="introduce">{{tag.introduce}}</label>
                  
                </li>
            </ul>
        </cube-scroll>
      
    </div>
    <van-button round type="danger" class="publish" @click="toPublish" size="small">我&nbsp要&nbsp发&nbsp布</van-button>
 
	</div>
</template>

<script type="text/javascript">
	export default {
  data() {
    return {
    	//轮播图数组
      items:[
       {

            src: require('../img/index1.jpg')//本地图片路径必须写require
            
          },
       {

            src: require('../img/index2.jpg')
            
          }
          
      ],
      tags:[
        {
          image:require('../img_fat/model1.jpg'),
          info:"Anna",
          likeNum:"3000",
          introduce:"1米八女汉子一枚，爱时尚..."
        },{
          image:require('../img_fat/model2.jpg'),
          info:"Lisa",
          likeNum:"1109",
          introduce:"干练职业女性的时装秀场..."
        },{
          image:require('../img_fat/model3.jpg'),
          info:"Kitty",
          likeNum:"800",
          introduce:"花园里的花仙子"
        },{
          image:require('../img_fat/model4.jpg'),
          info:"Kate",
          likeNum:"709",
          introduce:"微胖界的美女，时尚最前沿"
        },{
          image:require('../img_fat/model5.jpg'),
          info:"Lulu",
          likeNum:"589",
          introduce:"森林仙女，小个子女生的精灵风"
        },{
          image:require('../img_fat/model6.jpg'),
          info:"Alice",
          likeNum:"298",
          introduce:""
        }
      ]
      

     
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    },
    clickModel(tag,index){
      var self=this
        self.$router.replace('/Model_Info')
    },
    toPublish(){
       var self=this
        self.$router.push({path:'/Publish'});
    }
  },
  created(){
  	
  		//获取轮播图数据
  		
  		//this.$axios.get('/api/banner').then((res)=>{
  			//console.log(res)
  			//var res_=JSON.parse(res)
  			//this.items=res.image_info
  			//alert(res.code)
  			//var length_=res.result.length
  			//alert(length_)
  	//	})
  	//	.catch(err=> {
     //     console.log(err)
    //    })
  		
  		

  
  }
}
</script>
<style  scoped>
#logo {
  padding-top: 10px;
  font-size: 25px;
  padding-bottom: 10px;
  color:  #F5F5F5;
  font-family: "Microsoft YaHei";
}
#index{
  background: url('../img/index.jpg');
}
.search_model,.info,.introduce{
  color:  #FFFFFF;
}
.search_model{
  margin-top: 10px;
  margin-bottom: 10px;
}
.inp{
  background-color: transparent; /*背景透明*/
  box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.8);  /*内外渐变阴影*/
  font-size: 13px;
  height: 25px;
  width: 230px;
 
}
#panel{
  height:400px;/*必须有固定的高度*/ 
  margin-right: 10px;
}
#panel1{
  display: flex;/*弹性盒子布局*/
  flex-wrap:wrap;/*一行放不下，换行*/
  justify-content:space-around;

}
#panel2{
  width: 170px;
  height:225px;
  margin-bottom: 20px;
  margin-left: 10px;
  background-color:   #8B4513;
  opacity:0.9;/*设置透明度*/
  border-radius: 6px;
}
.model{
  
  height: 170px;
  width: 170px;
  border-radius: 10px;
  
}
.info{
  text-align: left;
  margin-bottom: 7px;
  margin-left: 3px;
}
.likeNum,.like{
  float: right;
  color:    #FFB6C1;
}
.introduce{
  display: inline-block;
  text-align: left;
  line-height: 20px;
  font-size: 13px;
  margin-left: 3px;
}
.publish{
  position: fixed;
  bottom:60px;
  right:15px;
  z-index: 999;
  font-size:15px;
  size: small;
}

</style>