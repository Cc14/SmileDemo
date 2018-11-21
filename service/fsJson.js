const fs=require('fs')

fs.readFile('./goods.json','utf8',function(err,data){
    console.log(typeof data)
    let newData=JSON.parse(data)
    console.log(typeof newData)
    let pushData=[]
    let i=0
    newData.RECORDS.map(function(value,index){
        if(value.IMAGE1!=null){
            i++
            pushData.push(value)
        }
    })
    fs.writeFile('./newGoods.json',JSON.stringify(pushData),function(err){
        if(err) console.log('写文件操作失败')
        else console.log('写文件操作成功')
    })
})