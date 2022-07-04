const mongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb://127.0.0.1:27017";

const connectionWithAsyncAwait = async () => {
  try {
    const cluster = await mongoClient.connect(connectionString);
    const database = cluster.db("Human_Resource_2");
    console.log("asyncawait connected");
    return database;
  } catch (e) {
    console.log("error while connnecting asynwait");
  }
};

const simpleFindAll = async () => {
  try {
    const connection = await connectionWithAsyncAwait();
    const response = await connection.collection("employee_2").find().toArray();
    console.log("simpleFindAll");
    console.log(response);
  } catch (e) {
    console.error("error whie finding all", e);
  }
};

const findSalaryMore = async () => {
  try {
    const connection = await connectionWithAsyncAwait();
    const response = await connection
      .collection("employee_2")
      .find({ salary: { $gt: "30000" } })
      .toArray();
    console.log("salary greater than ");
    console.log(response);
  } catch (e) {
    console.error("error whie finding all", e);
  }
};
const findExperianceMore = async () => {
  try {
    const connection = await connectionWithAsyncAwait();
    const response = await connection
      .collection("employee_2")
      .find({ overallExp: { $gt: "1" } })
      .toArray();
    console.log("salary greater than ");
    console.log(response);
  } catch (e) {
    console.error("error whie finding all", e);
  }
};
const findGraduateAndExperianceMore = async () => {
  try {
    const connection = await connectionWithAsyncAwait();
    const response = await connection
      .collection("employee_2")
      .find({ $and : [{yearGrad : {$gt : "2015"}} , {overallExp : {$gt : "1"}}]})
      .toArray();
    console.log("salary greater than ");
    console.log(response);
  } catch (e) {
    console.error("error whie finding all", e);
  }
};



//   connectionWithAsyncAwait()
  simpleFindAll()
// findSalaryMore();
// findExperianceMore()
// findGraduateAndExperianceMore()


module.exports = connectionWithAsyncAwait;