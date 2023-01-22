const express = require("express");
const app = express();
const productRouter = require("./routes/productRouter");



// using middlewares 

app.use(express.json());

app.use(express.urlencoded({extended: true }))

// main routes 

app.use('/api/v1' , productRouter)


app.get("/" , (req , res ) => {

    res.json({
        success:true ,
        message:"Hello world"
    });

})




const PORT = process.env.PORT || 8080 ;

app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`);
})