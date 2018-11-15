const BASEURL="https://www.easy-mock.com/mock/5bd01a0d2ccc8d60cfa7ee15/smilevue/"
const LOCALURL="http://localhost:3000/"
const URL={
    getShopingMallInfo : BASEURL +'index',
    getGoodsInfo : BASEURL +'getGoodsInfo',
    registerUser : LOCALURL + 'user/register',//用户注册接口
    login : LOCALURL + 'user/login',//用户登录接口
}
module.exports = URL