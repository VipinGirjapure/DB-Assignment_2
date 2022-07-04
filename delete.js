const mongoClient = require("mongodb").MongoClient;
const connectionWithAsyncAwait = require("./read")

const deleteMany = async () => {
    try{
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('employee_2').deleteMany({ lastCompany : 'Y'});
      
        console.log('deleted many y ');
        console.log(response);
        
    }
    catch(e){
        console.error("error while delete many",e);
    }
}
deleteMany()

// { acknowledged: true, deletedCount: 12 }
