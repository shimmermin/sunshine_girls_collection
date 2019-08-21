<template>
<div id="model">
	<div id="head_text">模&nbsp&nbsp特&nbsp&nbsp信&nbsp&nbsp息</div>
	<div id="head">	
	    <div id="portrait">
	    </div>

		  <div id="model_info">
        <div class="model_info_">
      			<label id="modelName">Anna</label>
      			<van-icon name="like-o" id="like_img" class="model_info1"/>
            <label id="like_num">3000</label>
            <label id="foucs"><van-icon name="add-o" color=" #C71585"/>&nbsp关注</label>
        </div>
  			<div class="model_info_">
          <van-tag color="#f2826a" plain>可爱</van-tag>
          <van-tag color="#f2826a" plain>性感</van-tag>
        </div>
        <div class="model_info_">
            <label>身&nbsp高:&nbsp165</label>
            <label class="model_info1">体&nbsp重:&nbsp120</label>          
        </div>
        <div class="model_info_">
            <label>胸&nbsp围:&nbsp100</label>
            <label class="model_info1">腰&nbsp围：2尺5</label>
        </div>
        <div class="model_info_">
            <label>臀&nbsp围:&nbsp105</label>
            <label class="model_info1">体&nbsp型：&nbsp正三角</label>
        </div>
		</div>
		<div id="motto"><van-icon name="gem" class="vip"/>&nbsp热衷于时尚的美胖子...</div>
	</div>
	<div id="search">搜&nbsp&nbsp索:
        <input type="text" name="search" class="inp"  placeholder="可爱风" >
          <i class="cubeic-search"></i>
        </input>
    </div>    
	<div id="scroll">
		<cube-scroll class="scroll_panel">
            <ul id="panel1">
                <li v-for="(tag,index) in tags" :key="index" id="panel2" @click="clickClothes(tag,index)">
                  <img :src="tag.image" alt="" class="clothes">
                  <div class="info">
                  	<div id="info1">{{tag.info}}</div>
                  	<div id="info2">
                  		<van-icon name="like-o" class="like"/>
                  		<label class="likeNum">{{tag.likeNum}}</label>
                  	</div>
                    <div class="introduce">{{tag.introduce}}</div>
                    <div class="tag_info">
                      <van-tag type="danger" size="medium" color="  #FF6347">{{tag.tag}}</van-tag>
                      
                    </div>
                  </div>
                  
                  
                </li>
            </ul>
        </cube-scroll>
	</div>
  <div>
      <navigation></navigation>
  </div>
</div>
</template>
<script>
import navigation from './NavTab'
export default{
  components:{
      navigation
  },
	data  () {

    return{
      tags:[
        {
          image:require('../img_fat/clothes1.jpg'),
          info:"通勤套装",
          likeNum:"1109",
          introduce:"干练职业女性的时装秀场",
          tag:"销量前10"
        },{
          image:require('../img_fat/clothes2.jpg'),
          info:"沙滩淑女套装",
          likeNum:"909",
          introduce:"沙滩上清凉可人的胖美女",
          tag:"超模节更新"
        },{
          image:require('../img_fat/clothes3.jpg'),
          info:"运动休闲套装",
          likeNum:"209",
          introduce:"元气满满的橙色，一个灵活的胖子！",
          tag:""
        },{
          image:require('../img_fat/clothes4.jpg'),
          info:"夏日小清新",
          likeNum:"809",
          introduce:"微胖界的美女，时尚最前沿",
          tag:"时尚达人前300"
        }
      ]
    }

  },
  methods:{
  		 clickClothes(tag,index){
         var self=this
         self.$router.replace('/Goods')
    }
  	}
}

</script>
<style scoped>
#model{
	background: url('../img/index.jpg');
	color:  #FFFFFF;
}
#head_text{
	font-size: 20px;
	padding-top: 15px;
}

#head{
	display: flex;/*指定head的子元素为弹性布局*/
	flex-wrap:wrap;/*指定head的子元素换行*/
	justify-content: space-between;/*子元素对齐方式*/
	background-color:	#FFFAF0;
	opacity: 0.9;
	border-radius: 5px;
	height: 150px;
	width: 365px;
	margin-top: 10px;
	margin-right: 5px;
	margin-left: 5px;
	color: 	#000000;
}
#portrait{
	height: 90px;
	width: 90px;
	background: url('../img_fat/model.jpg');
	box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.8);  /*内外渐变阴影*/
	border-radius:50%;
	margin-top: 10px;
	margin-left: 20px;
}
#modelName{
  font-size: 20px;
}
#model_info{
	height: 100px;
	width: 220px;
	margin-top: 10px;
	text-align: left;

}
#like_img,#like_num{
  color:  #FF4500;
}
.model_info_{
  margin-bottom: 6px;
  font-size: 14px;
}
.model_info1{
	margin-left: 30px;
}
#foucs{
  float: right;
  margin-right: 15px;
  color:  #C71585;
  margin-top: 5px;
}
#motto{
	width: 375px;
	text-align: left;
	margin-left: 15px;
  font-size: 14px;
  color:  #696969;
}
/*搜索框*/ 
#search{
  margin-top: 10px;
  margin-bottom: 10px;
  color:  #FFFFFF;
}
.inp{
  background-color: transparent; /*背景透明*/
  box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.8);  /*内外渐变阴影*/
  height: 20px;
  width: 230px;
  font-size: 13px;
}

/*滚动显示搭配*/ 
#scroll{
  height:450px;/*必须有固定的高度*/ 
  margin-right: 10px;
  margin-left: 10px;
}
#panel2{
  width: 355px;
  height:150px;
  margin-bottom: 7px;
  background: transparent;
  box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.8);  /*内外渐变阴影*/
  border-radius: 6px;
  display: inline-flex;
}
.clothes{
	height: 150px;
	width: 230px;
	border-radius: 6px;
}
.info{
	height: 150px;
	width: 115px;
	margin-left: 15px;
}
#info1,#info2,.likeNum,.introduce{
	margin-top: 10px;
	line-height: 20px;
}
#info1{
  font-size: 17px;
}
.like,.likeNum{
  color:  #FA8072;
}
.introduce{
	text-align: left;
  font-size: 14px;
}
.tag_info{
  margin-top: 10px;
}
.vip{
  color:  #FF0000;
}
</style>