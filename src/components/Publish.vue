<template>
<div id="publish">
	<div id="head_text">
	我要发布
	<van-divider />
	</div>
	<div class="upImage">
		<div class="body_text">上&nbsp传&nbsp搭&nbsp配：</div>
		<div class="filelist">
			<van-uploader :after-read="afterRead" v-model="fileList" multiple />
		</div>
	</div>
	<div class="upInfo">
		<div class="body_text1">编辑搭配信息：</div>
		<div class="body_text2">标题：
		     <input id="publish_info1" class="input_box" type="text"  v-model="publish_info" placeholder="职业套装">
		</div>
		<div class="body_text2">描述：
			<input id="publish_info2" class="input_box" type="text"  v-model="publish_info" placeholder="风格">
		</div>
	</div>
	<van-divider />
	<div class="upImage">
		<div class="body_text">上&nbsp传&nbsp单&nbsp品:单品1</div>
		<div class="filelist">
			<van-uploader :after-read="afterRead" v-model="fileList" multiple />
		</div>
	</div>
	<div class="upInfo">
		<div class="body_text1">编辑单品信息：</div>
		<div class="body_text2">标题：
			<input id="publish_info3" class="input_box" type="text"  v-model="publish_info" placeholder="T恤">
		</div>
		<div class="body_text2">描述：
			<input id="publish_info4" class="input_box" type="text"  v-model="publish_info" placeholder="风格">
		</div>
		<div class="body_text2">价格：
			<input id="publish_info5" class="input_box" type="text"  v-model="publish_info" placeholder="￥">
		</div>
	</div>
	
	<div >
		<van-icon name="plus" class="add_clothes"/>
		<label> <van-tag plain>添加单品</van-tag></label>
		<van-button type="primary" id="submit" size="small" >保存并提交</van-button>
	</div>
	
	
</div>
</template>
<script>
export default{
	data  () {

    return{
    	publish_info:'',
        fileList: [
	        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
	        // Uploader 根据文件后缀来判断是否为图片文件
	        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
	        { url: 'https://cloud-image', isImage: true }
        ]
    }

  },
  methods:{
  	 afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  	
  	}
}

</script>
<style scoped>
#publish{
	background: url('../img/index.jpg');
	height: 670px;
	
}
#head_text{
	font-size: 20px;
	padding-top: 10px;
	color:  #FFFFFF;
}
.body_text{
	font-size: 17px;
	margin-bottom: 10px;
	margin-top: 10px;
	margin-left: 10px;
	color:  #FFFFFF;
	text-align: left;
}
.body_text1{
	font-size: 15px;
	margin-bottom: 10px;
	margin-top: 10px;
	margin-left: 10px;
	color:  #FFFFFF;
	text-align: left;
}
.body_text2{
	color: #FFFFFF;
}
.input_box{
	margin-bottom: 10px;
	
}
#publish_info1,#publish_info3,#publish_info5{
	height: 20px;
	width: 230px;
}
#publish_info2,#publish_info4{
	height: 50px;
	width: 230px;
}
.add_clothes{
	color:#FFFFFF;
	height:30px;
	size:30px 3em;
	margin-top: 10px;
}
.filelist{
	text-align: left;
	padding-left: 20px;
}
#submit{
  position: fixed;
  bottom:10px;
  right:15px;
  z-index: 999;
  font-size:15px;
 }
</style>