import { Schema, Types, model } from "mongoose";

const transactionSchema = new Schema({
    title:{
     type:String,
     required:true
    },
    
    amount: {
        type: Number, // Corrected 'Type' to 'type'
        required: true,
    },
    category: {
        type: String,
        required: true, // Changed to boolean
        default: "others" // Added default value for 'others'
    },
    type: {
        type: String,
        required: true,
        enum: ["debit", "credit"],
    },
    user: {
        type: Types.ObjectId, // Corrected the way to access ObjectId
        ref: "User"
    }
}, {
    timestamps: true,
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;