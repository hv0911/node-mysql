const db = require("../models/database");

// create main models
const Product = db.products ;
const Review = db.reviews ;

// main constrolers


// 1.add new product 

const addProduct = async ( req , res ) => {

   let info = {
    title:req.body.title ,
    price:req.body.price ,
    description:req.body.description ,
    published: req.body.published ? req.body.published : false 
   }

   const product = await Product.create(info);

   res.status(201).json({
    success:true ,
    product:product
   })

}

// 2.get all the records from product table 

const ProductList = async (req , res ) =>{

    try {
        
        const products = await Product.findAll({});

        if(!products){
            return res.status(404).json({
                success:false ,
                messsage:"no products found"
            })
        }

        return res.status(201).json({
            success:true ,
            productList:products
        })
    } catch (error) {
     
        return res.status(500).json({
            success:false ,
            error
        })
        
    }

}

// update product to published
const productPublished = async( req, res ) =>{

    await Product.update({published:true} , {
        where:{
            id:req.params.id
        }
    })  

    return res.status(201).json({
        success:true ,
        messsage:"product published!"
    })

}

// update product
const productUpdate = async (req , res )=>{
    
    await Product.update(req.body ,{
        where:{
            id:req.params.id
        }
    })


    return res.status(201).json({
        success:true ,
        messsage:"product updated!"
    })
}

// delete product 

const deleteProduct = async (req , res ) =>{

    await Product.destroy({
        where:{
            id:req.params.id
        }
    })

    return res.status(201).json({
        success:true ,
        message:"product deleted!"
    })

}



module.exports = {
    addProduct ,
    ProductList ,
    productPublished ,
    productUpdate ,
    deleteProduct
}