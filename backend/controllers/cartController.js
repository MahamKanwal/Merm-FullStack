const getCart=(req,res)=>{
    res.status(200).json({
       success: true,
       message:"✅ allowed to fetch cart data"
    })
 }
 
 export {getCart};