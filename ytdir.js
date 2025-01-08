const fs = require("fs");

if(!fs.existsSync("./newFolder")){
    fs.mkdir("./newFolder", (err) => {
        if(err) throw err 
            console.log("ok")
    });
}

   