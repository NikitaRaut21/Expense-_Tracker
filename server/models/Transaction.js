import { Schema,Types,model } from "mongoose";
const transactionSchema = new Schema({
    amount:{
        Type:Number,
        required:true,
    },
    category:{
        type:String,
        required:"others",
    },
    type:{
        type:String,
        required:true,
        enum:["debit","credit"],
    },
    user:{
        type:Schema.type.ObjectId,
        ref:"User"
    }
},{
    timestamps:true,
});

const Transaction = model("Transaction",transactionSchema);
export default Transaction;