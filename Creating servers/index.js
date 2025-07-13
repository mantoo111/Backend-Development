let http=require("http")
let server=http.createServer((req,res)=>{
    if(req.url=="/news"){
// http://localhost:8000/news
let obj={
    status:1,
    data:[{
        newTitle:"Backend",
        newsDes:"learn about backend"
    },
  {
        newTitle:"frontemd",
        newsDes:"learn about frontend"
    }
]
}
res.end(JSON.stringify(obj))
    }
    if(req.url=="/about"){
        // http://localhost:8000/about
    }
    if(req.url=="/course"){
        // http://localhost:8000/course
    }
    if(req.url=="/"){
        res.end("welcome to backend")// http://localhost:8000/
    }

})
server.listen("8000")//  http://localhost:8000