const connectionWithAsyncAwait = require("./read")

const updateMany = async () =>{
try{
    const connection  = await connectionWithAsyncAwait()
    const response = await connection.collection('employee_2').updateMany({ salary : {$gt : 30000}},{$set : {salary: 25000}})
    console.log(response)
    console.log('updated')
}
catch(e){
    console.error('error while updating salary')
}
}




updateMany()






















updateMany({ salary : {$gt : 20000}},{$set : {salary: 35000}})