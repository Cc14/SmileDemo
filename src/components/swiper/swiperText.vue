<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide class="text">
日本首相安倍晋三今日下午抵达北京，开始对中国进行正式访问。此访是日本首相时隔7年正式访华。

另据环球网报道，由于此次安倍访华是日本首相时隔7年正式访华，因此引起了诸多媒体，尤其是来自日本媒体的关注。

25日下午，在安倍抵达前举行的中国外交部例行记者会上，有来自日本NHK的记者就安倍访华日程安排以及中方对其访华的期待提问。

对此，外交部发言人华春莹介绍称，今天下午，两国总理会共同参观中日经贸合作的成果图片展，并共同出席纪念中日和平友好条约缔结40周年招待会并致辞。明天还会有正式会谈和一些重要活动。

华春莹说，我们希望在中日和平友好条约缔结40周年这样一个重要的时间节点，双方能够充分利用这次访问，确认双方互为合作伙伴和机遇，能够更加坚定地改善和发展中日关系。最后，华春莹说道，“我们当然期待这次安倍首相的访华能够取得成功，并取得丰硕的成果。
5日下午，在安倍抵达前举行的中国外交部例行记者会上，有来自日本NHK的记者就安倍访华日程安排以及中方对其访华的期待提问。

对此，外交部发言人华春莹介绍称，今天下午，两国总理会共同参观中日经贸合作的成果图片展，并共同出席纪念中日和平友好条约缔结40周年招待会并致辞。明天还会有正式会谈和一些重要活动。

华春莹说，我们希望在中日和平友好条约缔结40周年这样一个重要的时间节点，双方能够充分利用这次访问，确认双方互为合作伙伴和机遇，能够更加坚定地改善和发展中日关系。最后，华春莹说道，“我们当然期待这次安倍首相的访华能够取得成功，并取得丰硕的成果。
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import "swiper/dist/css/swiper.css"
    import {swiper , swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    direction:'vertical',
                    slidesPerView:'auto',
                    freeMode:true,
                    mousewheel:true
                }
            }
        },
        components:{swiper , swiperSlide}
    }
</script>

<style scoped>
.swiper{
    height: 300px;
    overflow: hidden;
}
.text{
    font-size: 18px;
    padding:30px;
    box-sizing:border-box;
    height: auto;
}
</style>