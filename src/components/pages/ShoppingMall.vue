<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon" alt="">
                </van-col>
                <van-col span="16"><input type="text" class="search-input"></van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!--swiper area-->
        <div class="swiper-area">
            <van-swipe :autoplay="5000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img v-lazy="banner.image" width="100%" alt="">
                </van-swipe-item>

            </van-swipe>
        </div>
        <!-- type bar -->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="98%" alt="">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!-- adBanner area -->
        <div>
            <img v-lazy="adBanner" width="100%" alt="">
        </div>
        <!-- Recommend goods area -->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" alt="" width="80%">
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
        <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
        <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
        <!-- Hot-Area -->
        <div class="hot-area">
            <div class="hot title">热卖商品</div>
            <div class="hot-goods">
                <!-- 这里是list组件 -->
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                            <goodsInfo :goodsId="item.goodsId" :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.goodsPrice"></goodsInfo>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
    import 'swiper/dist/css/swiper.css'
    import {swiper , swiperSlide} from 'vue-awesome-swiper'
    import floorComponent from '../component/floorComponent'
    import goodsInfo from '../component/goodsInfoComponent'
    import {toMoney} from '@/filter/moneyFilter'
    import url from '@/serviceAPI.config.js'
    export default {
        data() {
            return {
                swiperOption:{
                    slidesPerView:3
                },
                locationIcon:require('../../assets/images/location.png'),
                category:[],
                adBanner:'',
                bannerPicArray:[],
                recommendGoods:[],
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:{},
                hotGoods:[]
            }
        },
        components:{swiper,swiperSlide,floorComponent,goodsInfo},
        filters:{
            moneyFilter:function(money){
                return toMoney(money)
            }
        },
        created(){
            axios({
                url:url.getShopingMallInfo,
                method:'get'
            })
            .then(response=>{
                if(response.status==200){
                    console.log(response)
                    this.category=response.data.data.category;
                    this.adBanner=response.data.data.advertesPicture.PICTURE_ADDRESS;
                    this.bannerPicArray=response.data.data.slides;
                    this.recommendGoods=response.data.data.recommend;
                    this.floor1=response.data.data.floor1;
                    this.floor2=response.data.data.floor2;
                    this.floor3=response.data.data.floor3;
                    this.floorName=response.data.data.floorName;
                    this.hotGoods=response.data.data.hotGoods;
                }
            })
            .catch(error=>{
            })
        }
    }
</script>

<style scoped>
  .search-bar{
      height: 2.2rem;
      line-height: 2.2rem;
      background: #e5017d;
      overflow: hidden;
  }
  .search-input{
      width: 100%;
      height: 1.3rem;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      border-bottom: 1px solid #fff;
      background: #e5017d;
      color: #fff;
  }
  .location-icon{
      padding-top: .2rem;
      padding-left: .3rem;
      
  }
  .swiper-area{
      clear: both;
      height: 9rem;
      overflow: hidden;
      position: relative;
  }
  .swiper-area .van-swipe{
      height: 9rem;
      overflow: hidden;
      position: relative;
  }
   .swiper-area .van-swipe__indicators{
        position: absolute;
        bottom:1rem!important;
  }
  .type-bar{
      background: #fff;
      margin:0 .3rem .3rem;
      border-radius: .3rem;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
  }
  .type-bar div{
      padding:.3rem;
      font-size: 12px;
  }
  .recommend-area{
      background: #fff;
      margin-top:.3rem;      
  }
  .recommend-body{
      border:1px solid #ddd;
  }
  .recommend-title{
      color: #e5017d;
      font-size: 16px;
      line-height: 2em;
      padding:0 .5rem;
  }
  .recommend-item{
      font-size: 12px;
      border-right: 1px solid #ddd;
      text-align: center
  }
  .hot-area{
      text-align: center;
      font-size: 14px;
      height: 1.8rem;
      line-height: 1.8rem;
  }
 .hot-goods{
     height: 130rem;
     overflow: hidden;
     background: #fff;
 }
</style>