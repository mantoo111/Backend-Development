let express = require("express"); //This line imports the Express.js module and assigns it to the variable express.
const { dbconnection } = require("./dbConnection");
let app = express();

app.use(express.json());

let MyDB;
const port = 8000;
// Connect once at server startup
(async () => {
  try {
    MyDB = await dbconnection();
    app.listen(port || 8000, () => {
      console.log("✅ Server is running on port 8000");
    });
  } catch (err) {
    console.error("❌ Failed to connect DB. Server not started.");
  }
})();

// GET API (test purpose)
app.get("/studentread", (req, res) => {
  //💡 GET is usually used to retrieve data.
  res.send("student view api");
});

app.post("/studentinsert", async (req, res) => {
  //This route handles create/insert operations
  let studentCollection = MyDB.collection("students");

  let obj = {
    sName: req.body.sName,
    sEmail: req.body.sEmail,
  };
  let insertRes = await studentCollection.insertOne(obj);

  let resobj = {
    //helpful for frontend developer so that they can acknowledge response
    status: 1,
    msg: "Data is Inserted",
    insertRes,
  };
  res.send(resobj);
});
