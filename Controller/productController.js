const producModel = require('../Model/product');

const createProduct = async(req,resp)=>{
    try {
        const product = new producModel( {
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            discount:req.body.discount
        })

        const res = await product.save();
        return resp.status(200).json({status:"success",msg:"created successfuly",result:res});

    } catch (error) {
        return resp.status(500).json({status:"success",msg:"Server error",err:error});
    }
}

const getProduct = async(req, resp) => {
    try {
        const product = await producModel.find();
        return resp.status(200).json({status:"success",msg:"",result:product});

    } catch (error) {
        return resp.status(500).json({status:"success",msg:"Server error",err:error});
    }
}

module.exports = { createProduct, getProduct};