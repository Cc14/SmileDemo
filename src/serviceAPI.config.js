const BASEURL="https://www.easy-mock.com/mock/5bd01a0d2ccc8d60cfa7ee15/smilevue/"
const LOCALURL="http://localhost:3000/"
const URL={
    getShopingMallInfo : BASEURL +'index',
    getGoodsInfo : BASEURL +'getGoodsInfo',
    registerUser : LOCALURL + 'user/register',//用户注册接口
    login : LOCALURL + 'user/login',//用户登录接口
    getDetailGoodsInfo : LOCALURL + 'goods/getDetailGoodsInfo',//获取商品详情
    getCategoryList : LOCALURL + 'goods/getCategoryList',//得到大类信息
    getCategorySubList : LOCALURL + 'goods/getCategorySubList',//得到二级分类信息
    getGoodsListByCategorySubID : LOCALURL + 'goods/getGoodsListByCategorySubID',//得到信息
}
module.exports = URL