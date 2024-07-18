import Transaction from "../models/Transaction.js"
const PostTransaction =async(req,res)=>{
  const {title,amount,category,type ,user}=req.body;

  const transaction =new Transaction({
    title,
    amount,
    category,
    type,
    user

  });
  try{
    const savedTransaction = await transaction.save();
    res.json({
        success:true,
        message:`transaction succesfully`,
        data:savedTransaction
    })
  }
  catch(e){
    res.json({
        success:false,
        message:e.message,
        data:null
    })
  }
}
export {PostTransaction}