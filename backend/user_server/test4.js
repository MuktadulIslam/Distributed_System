// const {xyz} = require("./test3.js");
// // xyz()
// console.log(xyz)

const database = require("./repository/database.js");

async function runServer() {
    await database.connectToDatabase();
    await database.createOne({ firstname: "Muktadul", lastname: "Islam", email:"bsse1215@iit.du.ac.bd", password: "1215" })
    let x = await database.findOneByEmail("bsse1215@iit.du.ac.bd");
    let y = await database.isEmailExists("bsse1215@iit.du.ac.bd");
    console.log(x);
    console.log(y);
}


// Call the function to insert data
runServer()


