const mongoose =require('mongoose');
const db="mongodb://localhost/smile-db";
const glob=require('glob')
const {resolve} =require('path')

exports.initSchemas=()=>{
    glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}
exports.connect=()=>{
    //链接数据库
    mongoose.connect(db)
    let maxConnectTime=0;
    return new Promise((resolve,reject)=>{
        //链接成功
        mongoose.connection.once('open',function(){
            console.log('*****数据库链接成功******')
            resolve()

        })
        mongoose.connection.on('error',function(){
            console.log('*****数据库错误******')
            if(maxConnectTime<=3){
                maxConnectTime++
                mongoose.connect(db)
            }else{
                reject(err)
                throw new Error('数据库出现问题，程序无法搞定，请人为修理')
            }
        })
        mongoose.connection.on('disconnected',function(err){
            console.log('*****数据库断开******')
            if(maxConnectTime<=3){
                maxConnectTime++
                mongoose.connect(db)
            }else{
                reject(err)
                throw new Error('数据库出现问题，程序无法搞定，请人为修理')
            }
            
           
        })
    })
    
}