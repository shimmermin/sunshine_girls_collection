<template>
  <div id="bg">
        <div id="info_record">个&nbsp人&nbsp数&nbsp据&nbsp记&nbsp录</div>
  		<div id="sex" class="info">
  			 <div id="sex1" class="info_">性&nbsp别：</div>
  			 <label id="man"><input name="r1" type="radio" value="男"></label>
    		 <label id="woman"><input name="r1" type="radio" value="女"></label>
    		
    		 

  		</div>
  		<div class="info">
  		    <div  class="info_">
	  			<label id="chest">胸&nbsp围：</label>
	  			<select id="sel">
				  <option value="A">A</option>
				  <option value="B">B</option>
				  <option value="C">C</option>
				  <option value="D">D</option>
				  <option value="E">E</option>
				</select>
	  			<label id="waist">腰&nbsp围：</label>
	  			<select id="sel">
				  <option value="2.1尺">2.1尺</option>
				  <option value="2.2尺">2.2尺</option>
				  <option value="2.3尺">2.3尺</option>
				  <option value="2.4尺">2.4尺</option>
				  <option value="2.5尺">2.5尺</option>
				  <option value="2.6尺">2.6尺</option>
				  <option value="2.7尺以上">2.7尺以上</option>
				</select>
			</div>
			<div  class="info_">
	  			<label id="butt">臀&nbsp围：</label>
	  			<select id="sel">
				  <option value="80cm">80cm</option>
				  <option value="86cm">86cm</option>
				  <option value="90cm">90cm</option>
				  <option value="92cm">92cm</option>
				  <option value="94cm">94cm</option>
				  <option value="96cm">96cm</option>			  
				  <option value="100cm及100cm以上">100cm以上</option>
				</select>
				<label id="shoulder">肩&nbsp宽：</label>
	  			<select id="sel">
				  <option value="35cm以下">35cm以下</option>
				  <option value="36cm">36cm</option>
				  <option value="37cm">37cm</option>
				  <option value="38cm">38cm</option>
				  <option value="39cm">39cm</option>
				  <option value="40~45cm">40~45cm</option>			  
				  <option value="45cm以上">45cm以上</option>
				</select>
			</div>
  		</div>
  		<div class="info">
  			<div class="info_">
	  			<label id="weight">体&nbsp重：</label>
	  			<select id="sel">
					  <option value="45kg以下">45kg以下</option>
					  <option value="45~50kg">45~50kg</option>
					  <option value="51~55kg">51~55kg</option>
					  <option value="56~60kg">56~60kg</option>
					  <option value="60kg~65kg">60kg~65kg</option>
					  <option value="66kg~70kg">66kg~70kg</option>			  
					  <option value="70kg以上">70kg以上</option>
					</select>
	  			<label id="body_height">身&nbsp高：</label>
	  			<select id="sel">
					  <option value="140cm以下">140cm以下</option>
					  <option value="141~150cm">141~150cm</option>
					  <option value="151~155cm">151~155cm</option>
					  <option value="156~157cm">156~157cm</option>
					  <option value="157~159cm">157~159cm</option>
					  <option value="160~165cm">160~165cm</option>			  
					  <option value="166~170cm">166~170cm</option>
					  <option value="171~180cm">171~180cm</option>
					  <option value="181~190cm">181~190cm</option>
					  <option value="190cm以上">190cm以上</option>
					</select>
			</div>
			<div id="leg" class="info_">
  			<label id="leg_length" >腿&nbsp长：</label>
  			<select id="sel">
				  <option value="50cm以下">50cm以下</option>
				  <option value="50~55cm">50~55cm</option>
				  <option value="56~60cm">56~60cm</option>
				  <option value="61~65cm">61~65cm</option>
				  <option value="65~70cm">65~70cm</option>
				  <option value="70~75cm">70~75cm</option>			  
				  <option value="75cm以上">75cm以上</option>
				</select>
			</div>
  		</div>
  		<div id="figure" >
  			<div id="figure1" class="info_">体&nbsp型：</div>
  			<div id="figure2">
  				 <label id="figure_detail1"><input name="r2" type="radio" value="正三角"></label>
    			 <label id="figure_detail2"><input name="r2" type="radio" value="倒三角"></label>
    			 <label id="figure_detail3"><input name="r2" type="radio" value="倒三角"></label>
    			 <label id="figure_detail4"><input name="r2" type="radio" value="倒三角"></label>
    		 </div>
    		
  		</div>
  		<div>
  			 <button type="button" id="btn2" @click="submitHandler1" >完&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp成</button>

  		</div>
  </div>
</template>
<script>
var rs = document.getElementsByName("r1"); //获取单选按钮组
/*for(var i in rs){
    rs[i].onclick = function () { //绑定click事件
        var lab = this.parentNode; //获取label标签
        var labs = lab.parentNode.childNodes; //获取同组的所有label标签
        for(var j in labs){
            labs[j].className = ""; //修改为未选中
        }
        lab.className = "checked"; //当前label修改为选中
    }
}*/

export default{
	data  () {

    return{
      
    }

  },
  	methods:{
  		submitHandler1(e){
  			e.preventDefault()
  			var self=this
  			self.$router.replace('/NavTab/Index')
  		}
  	}
}

</script>

<style scoped>
#bg{
	background: url('../img/first_login.jpg');
	height: 677px;
    color:   #FFFFFF;
}
#info_record{
	padding-top: 15px;
	padding-bottom: 15px;
	background-color:	#8B4513;
	opacity:0.9;
	font-size: 25px;
	color:   #FFFFFF;
	font-family: "Microsoft YaHei";
   font-weight:500;
}
/*设置字体样式*/
#sex1,#chest,#waist,#butt,#shoulder,#weight,#body_height,#leg_length,#figure1{
	font-family: "Microsoft YaHei";
   font-weight:300;
   font-size: 18px;
}

/*设置每栏信息的间隔*/
.info{
	margin-top: 20px;
}

/*性别栏*/
#sex input{
	display: none;/*单选按钮设置为隐藏*/
	
}

#sex1{
	
	text-align: left;/*靠左*/
}

#man{
	display: inline-block;
	height: 66px;
	width: 66px;
	background: url("../img/sex_man.jpg") no-repeat 0px -0px;
    margin-right: 25px;   
    border-radius: 50%;
}

#woman{
	display: inline-block;
	height: 66px;
	width: 66px;
	background: url("../img/sex_woman.jpg") no-repeat 0px -0px;
    margin-right: 25px;   
    border-radius: 50%;
}

/*数据栏*/

#leg{
	text-align: left;
	
}
#sel{
	width: 50px;
	background-color: transparent; /*背景透明*/
	box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.2);  /*内外渐变阴影*/
	color: #FFFFFF;
}
.info_{
	text-align: left;
	padding-left:25px;
	margin-bottom: 20px;
}
#waist,#shoulder,#body_height{
	padding-left:50px;
}
#sel{
	width: 65px;
}
/*体型栏*/
#figure input{
	display: none;/*单选按钮设置为隐藏*/	
}
#figure1{
	text-align: left;
	padding-top: 20px;
}
#figure2{
	margin-top: 20px;
	
}
#figure_detail1{
	display: inline-block;
	height: 100px;
	width: 50px;
	background: url("../img/woman1.jpg") no-repeat 0px -0px;
    margin-right: 25px;
    
    border-radius: 50%;
}

#figure_detail2{
	display: inline-block;
	height: 100px;
	width: 50px;
	background: url("../img/woman2.jpg") no-repeat 0px -0px;
    margin-right: 25px;
    
    border-radius: 50%;
}
#figure_detail3{
	display: inline-block;
	height: 100px;
	width: 50px;
	background: url("../img/woman3.jpg") no-repeat 0px -0px;
    margin-right: 25px;
    
    border-radius: 50%;
}
#figure_detail4{
	display: inline-block;
	height: 100px;
	width: 50px;
	background: url("../img/woman4.jpg") no-repeat 0px -0px;
    margin-right: 25px;
    
    border-radius: 50%;
}

#btn2{
   width: 200px;
   margin-top: 70px;
   padding-top: 7px;
   padding-bottom: 7px;
   background-color:    #8B4513; /*背景透明*/
   opacity:0.96;/*设置透明度*/
   border: 1px solid     #8B4513; /*边框样式 */
   font-size: 20px;
   font-family: "Microsoft YaHei";
   color:   #FFFFFF;
   font-weight:500;
}
</style>