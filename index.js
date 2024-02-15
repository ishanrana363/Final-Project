const app = require("./app");
const connectDB = require("./db")


require("dotenv").config();
const port = process.env.PORT||3000;

app.listen(port, async ()=>{
    console.log(`server run successfully at http://localhost:${port}`)
    await connectDB()

})