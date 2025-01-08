const fsPromises = require("fs").promises

const fileOps = async () => {
    try{
        await fsPromises.readFile("example.txt", "utf-8")
        console.log("read done");
        await fsPromises.writeFile("new.txt", "Hi i'm new")
        console.log("write done");
        await fsPromises.rename("new.txt", "newtwo.txt")
        console.log("rename succussfully");
        await fsPromises.writeFile("delete.txt", "Please delete me")
        console.log("delete create successfully");
        await fsPromises.unlink("delete.txt")
        console.log("delete successfully");
    } catch(err){
        console.log(err)
    }
}
fileOps()



