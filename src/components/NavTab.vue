<template>
	<div id='nav_tab'>
		<!--显示嵌套路由-->
		<div>
    	<router-view/>
    	</div>
		<cube-tab-bar class="tab"
		    v-model="selectedLabelDefault"
		    :data="tabs"
		    @click="clickHandler_Tab"
		    @change="changeHandler_Tab">
	  </cube-tab-bar>
	  <!--购物车数量总数角标提示-->
	  <span class="cart_num">
	  	{{cart_num}}
	  </span>
   </div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return{
				cart_num:10,
				selectedLabelDefault: 'Home',
		        tabs: [{
			        label: 'Home',
			        icon: 'cubeic-home'
			      }, {
			        label: 'Mall',
			        icon: 'cubeic-mall'
			      }, {
			        label: 'Me',
			        icon: 'cubeic-person'
		       }]
			}
		},
		methods: {
			clickHandler_Tab (label) {
     			 // if you clicked home tab, then print 'Home'
     			 if(label=="Home"){
     			 	this.$router.push({path:'/NavTab/Index'});
     			 }
    		  console.log(label)
   			 },
    		changeHandler_Tab (label) {
     			 // if you clicked different tab, this methods can be emitted
     			 switch(label){
     			 	case 'Home':
     			 	this.$router.push({path:'/NavTab/Index'});
     			 	break;

     			 	case 'Mall':
     			 	this.$router.push({path:'/NavTab/Mall'});
     			 	break;

     			 	case 'Me':
     			 	this.$router.push({path:'/NavTab/Me'});
     			 	break;
     			 }
   			 }
		}
	}
</script>
<style scoped>/*样式全局生效*/
.tab{
  background-color:		#FFFFF0;
  position:fixed; /*位于底部*/
  bottom:0;
  z-index: 999;
  width:100%;
}
.cart_num{
	position: fixed;
	bottom: 30px;
	right:43%;
	z-index: 1001;
	border-radius: 50%;
	height: 18px;
	width: 18px;
	line-height: 18px;
	font-size: 13px;
	background: #FF4500;
	color: 	#FFFFFF;
}
</style>