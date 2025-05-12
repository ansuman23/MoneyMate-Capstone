const mongoose=require("mongoose")
const moment=require("moment-timezone")

const transactionSchema=new mongoose.Schema({
    transactionId:{
        type:String,
        required:true,
        unique:true
    },
    accountNo:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required: true,
        min: [1, "Amount must be greater than zero."]
    },
    type:{
        type:String,
        required:true,
        enum:['debit','credit']
    },
    tr_date:{
        type: Date,
    },
    description:{
        type:String
    },
    balance:{
        type: Number,
    }
})

transactionSchema.pre("save", function(next) {
    const nowIST = moment.tz("Asia/Kolkata").toDate();
    this.tr_date = nowIST;
    next();
});

const Transaction=mongoose.model("Transaction",transactionSchema)
module.exports=Transaction