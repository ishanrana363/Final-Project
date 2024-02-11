const app = require("./app");
const connectDB = require("./db")


require("dotenv").config();
const port = process.env.PORT||3000;

app.listen(port, async ()=>{
    console.log(`Server run successfully at http:${port}`);
    await connectDB()

})