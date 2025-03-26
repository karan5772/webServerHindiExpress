
const http = require("http");

const serverBanao = function(){
    const server = http.createServer((req,res) => {
    console.log("Server Started");
   console.log(req.method)
   console.log(req.url)
    switch(req.method){
        case "GET" :
        {   if (req.url === "/") return res.end ("Ye hamara homepage hai ji");
            if (req.url === "/about-us") return res.end ("Ye humara about us hai ji");
            if (req.url === "/contact-us") return res.end ("Ye humara contact hai ji");
        }
        break
        default : return res.end ("Ye hamara homepage hai ji");
    }
    res.end("Ye lo ji request");

    });
    return server;
};


const suno = function (PORT){
    const server = serverBanao();
    server.listen(PORT,()=>{
        console.log(`port ${PORT} pe sunn raha hu`);
    });
}


module.exports = {
    serverBanao,
    suno,
};