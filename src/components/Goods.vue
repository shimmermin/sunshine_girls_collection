<template>
<div id="goods">
	<div id="head_text">搭&nbsp&nbsp配&nbsp&nbsp详&nbsp&nbsp情<van-divider /></div>
	<div id="scroll">
		<cube-scroll class="scroll_panel">
            <ul id="panel1">
                <li v-for="(tag,index) in tags" :key="index" id="panel2" >
                  <img :src="tag.image" alt="" class="clothes">
                  <div class="info">
                  	<div id="info1">{{tag.info}}</div>
                  	<div id="info2">
                      <van-tag type="danger" size="medium">{{tag.tag}}</van-tag>
                      <div id="like_img_num">
                      		<van-icon name="like-o" class="like"/>
                      		<label class="likeNum">{{tag.likeNum}}</label>
                      </div>                 		
                  	</div>
                  	
                    <div class="introduce">{{tag.introduce}}</div>
                    <div class="addtocart_text">
                      <label class="price">￥{{tag.price}}</label>
                      &nbsp&nbsp&nbsp&nbsp加入购物车<i  class="cubeic-mall" @click="addTo_cart($event,index)"></i></div>
                  </div>
                  
                  
                </li>
            </ul>
        </cube-scroll>
        <div class="ball_wrap">
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
            >
                <div class="ball" v-if="ball.show">
                    <div class="inner">
                      <i class="cubeic-add"></i>
                    </div>
                </div>
              
            </transition>
        </div>
	</div>
  <div>
      <navigation></navigation>
  </div>
</div>

</template>
<script>
import { mapState } from 'vuex'
import navigation from './NavTab'
export default{
  components:{
      navigation
  },
	data  () {

    return{
       ball:{
          show:false,
          el:''
       },
    	 tags:[
        {
          image:require('../img_fat/goods1.jpg'),
          info:"丝柏舍>通勤休闲黑衬衫",
          likeNum:"1109",
          price:"203.6",
          introduce:"职场女性的舒适衬衫",
          tag:"限时特价"
        },{
          image:require('../img_fat/goods2.jpg'),
          info:"丝柏舍>黑色喇叭裤",
          likeNum:"569",
          price:"113",
          introduce:"干练又不失性感，腿部曲线玲珑",
          tag:"超模节"
        },{
          image:require('../img_fat/goods3.jpg'),
          info:"卓诗尼夏季白色高跟鞋",
          likeNum:"1209",
          price:"303",
          introduce:"职场可爱风，紧张的工作环境得以放松",
          tag:""
        },{
          image:require('../img_fat/goods4.jpg'),
          info:"KissMe橙色通勤包",
          likeNum:"2038",
          price:"503",
          introduce:"大容量，高颜值，全场焦点",
          tag:"暂时无货"
        },{
          image:require('../img_fat/goods5.jpg'),
          info:"劳力士女士腕表",
          likeNum:"1109",
          price:"1203",
          introduce:"干练职业女性的必备品",
          tag:""
        }
      ]
      
    }

  },
  methods:{
      addTo_cart(e,index){
          var self=this
          self.$store.commit('addToCart',this.tags[index])//必须使用self，否则会出现this的指向出现问题
           //把vuex中的数据存到本地,由于localStorge只能存储字符串，所以需要用JSON.stringify把数组变成字符串
          window.localStorage.setItem("cart_Array",JSON.stringify(this.cart_Arr))
          //取出的时候，注意要用Json.parse解析
          //var a=[]
          //a=JSON.parse(window.localStorage.getItem("cart_Array"))
          //console.log(a)

          //点击按钮时隐藏的小球显示出来
          this.ball.show=true
          //获取点击元素
          this.ball.el=e.target
      },
      beforeEnter(el){
          //让小球移动到点击的位置
          //获取到点击的元素
          const dom=this.ball.el
          console.log(dom)
          //获取点击的元素的位置
          const rect=dom.getBoundingClientRect()
          console.log(rect)
          //移动的x,y的距离
          const x=rect.left-window.innerWidth*0.5
          const y=-(window.innerHeight-rect.top)
          console.log(x,y)
          el.style.display='block'
          el.style.transform=`translate3d(0,${y}px,0)`//注意反引号和花括号
          const inner=el.querySelector('.inner')
          inner.style.transform=`translate3d(${x}px,0,0)`
      },
      enter(el,done){
          //触发重绘
          document.body.offsetHeight
          //小球移动到购物车
          el.style.transform='translate3d(0,0,0)'
          const inner=el.querySelector('.inner')
          inner.style.transform='translate3d(0,0,0)'
          //过渡完成后执行的事件
          el.addEventListener('transitionend',done)
      },
      afterEnter(el){
          //结束隐藏小球
          this.ball.show=false
          el.style.display='none'
      }
  		
  },
    
    
    
  computed:{
    ...mapState({
      cart_Arr:state=>state.cart
    })
  }
    
}

</script>
<style scoped>
#goods{
	background: url('../img/index.jpg');
	color:  #FFFFFF;
}
#head_text{
	font-size: 20px;
	padding-top: 15px;
	margin-bottom: 10px;
}
#scroll{
	height: 630px;
	margin-left: 10px;
	margin-right: 10px;
}
#panel2{
  width: 355px;
  height:130px;
  margin-bottom: 7px;
  background: transparent;
  box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.8);  /*内外渐变阴影*/
  border-radius: 6px;
  display: inline-flex;
}
.clothes{
	height: 130px;
	width: 150px;
	border-radius: 6px;
}
.info{
	height: 130px;
	width: 185px;
	margin-left: 15px;
}
#info1{
  font-size: 17px;
}
#info1,#info2,.likeNum,.introduce,.addtocart_text{
	margin-top: 7px;
	line-height: 20px;
}
#like_img_num{
  float:right;
  color:  #FF6347;
}
.price{
  color:  #FF6347;
}
.introduce{
	text-align: left;
  font-size: 14px;
}
.addtocart_text{

  color:  #FF4500;
  float: right;

}
.ball{
  position: fixed;
  left:50%;
  bottom: 10px;
  z-index: 1003;
  color:  #FF4500;
  -webkit-transition: all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
}
.inner{
  width: 16px;
  height: 16px;
  -webkit-transition: all 1s linear
}
</style>