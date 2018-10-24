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

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                locationIcon:require('../../assets/images/location.png'),
                category:[],
                adBanner:'',
                bannerPicArray:[]
            }
        },
        created(){
            axios({
                url:'https://www.easy-mock.com/mock/5bd01a0d2ccc8d60cfa7ee15/smilevue/',
                method:'get'
            })
            .then(response=>{
                console.log(response)
                if(response.status==200){
                    this.category=response.data.data.category;
                    this.adBanner=response.data.data.advertesPicture.PICTURE_ADDRESS;
                    this.bannerPicArray=response.data.data.slides;
                }
            })
            .catch(error=>{
                console.log(error)
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
      height: 10rem;
      overflow: hidden;
      position: relative;
  }
  .swiper-area .van-swipe{
      height: 10rem;
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
  
</style>