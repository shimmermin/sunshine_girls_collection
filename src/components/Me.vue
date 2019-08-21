<template>
<div id="me">
	<div id="head_text">个&nbsp&nbsp人&nbsp&nbsp中&nbsp&nbsp心</div>
	<div id="head">
			<div id="mine_info">
				  <div id="user_img"></div>
				  <div id="model_info">
				        <div class="model_info_">
				      		<label id="modelName">Me</label>
				      		<van-icon name="like-o" id="like_img" class="model_info1"/>
				            <label id="like_num">45</label>
				            <label id="foucs">粉丝：12</label>
				        </div>
				  		<div class="model_info_">
				          <van-tag color="#f2826a" plain>一级用户</van-tag>
				          <van-tag color="#f2826a" plain>可爱</van-tag>
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
	       </div>	
	       <div id="motto"><van-icon name="flower-o" class="vip" />&nbsp初级用户，待开发...</div>	
	</div>
	<div class="body_layout">
		
		<label class="body_text">修&nbsp改&nbsp数&nbsp据</label>
		<van-divider />
	</div>
	<div class="body_layout">
		<label class="body_text">我&nbsp的&nbsp发&nbsp布</label>
		<van-divider />
	</div>
	<div class="body_layout">
		<label class="body_text">我&nbsp的&nbsp收&nbsp藏</label>
		<van-divider />
	</div>
	<div class="body_layout">
		<label class="body_text">我&nbsp的&nbsp关&nbsp注</label>
		<van-divider />
	</div>
	<div class="body_layout">
		<label class="body_text">我&nbsp的&nbsp订&nbsp单</label>
		<van-divider />
	</div>
	 <van-button round type="danger" class="publish" @click="toPublish" size="small">我&nbsp要&nbsp发&nbsp布</van-button>
</div>
</template>
<script>
export default{
	data  () {

    return{
      
    }

  },
  methods:{
  	toPublish(){
  		 var self=this
        self.$router.push({path:'/Publish'});
  	}
  		
  	
  	}
}

</script>
<style scoped>
#me{
	background:url('../img/index.jpg');
	height: 620px;
}
#head_text{
	color: #FFFFFF;
	font-size: 20px;
	padding-top: 15px;
	margin-bottom: 10px;
}
#mine_info{
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	height:80px;
}
.body_layout{
	text-align: left;

}
.body_text{
	color: #FFFFFF;
	margin-left: 20px;
	text-align: left;
}
#user_img{
	background: url('../img/user_head.jpg');
	border-radius: 50%;
	margin-left: 20px;
	margin-top: 10px;
	margin-right: 20px;
	width: 80px;
	height: 80px;
}
#head{
	display: flex;/*指定head的子元素为弹性布局*/
	flex-wrap:wrap;/*指定head的子元素换行*/
	justify-content: space-between;/*子元素对齐方式*/
	background-color:	#FFFAF0;
	opacity: 0.9;
	
	height: 150px;
	width: 375px;
	margin-top: 10px;
	
	margin-bottom: 15px;
	color: 	#000000;
}
#user_info{
	width:260;
	height: 80px;
	margin-right: 20px;
	padding-top: 10px;
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
  padding-left: 5px;

}
.model_info1{
	margin-left: 45px;
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
	margin-top: 10px;
	margin-left: 15px;
    font-size: 14px;
    color: 	#696969;
}
.publish{
  position: fixed;
  top:250px;
  right:160px;
  z-index: 999;
  font-size:14px;
}
.vip{
	color:	#32CD32;
}
</style>