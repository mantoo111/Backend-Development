//cocept of routing initial
let express=require("express")
let app=express()
app.use (express.json());
app.get("/",(req,res)=>{//on "/ "it will run 
res.send({status:1,msg:"HomePage API"})
});
app.get("/news",(req,res)=>{
    res.send({status:1,msg:"Newspage API"})
});
app.get("/news/:id", (req, res) => {
    let newsId=req.params.id
  res.send("News details API for ID "+newsId  );
});

app.post("/login",(req,res)=>{
    console.log(req.body)//in the formof obj, key value pair
   res.send(
    {
        status:1,
        msg:"login API",
        bodydata:req.body,
        querydata:req.query
    });
});
app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});