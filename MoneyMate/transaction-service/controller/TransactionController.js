const Transaction = require("../model/TransactionModel");
const { v4: uuidv4, parse } = require('uuid');
exports.addTransaction = async (req, res) => {
    try {
        const {accountNo,amount,type,description}=req.body;
        // console.log(accountNo,amount,type,description)
        if(!accountNo){
            return res.status(400).json({success:false,message:"Account Number is Required"});
        }

        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount)) {
            return res.status(400).json({ success: false, message: "Invalid amount" });
        }
        if (parsedAmount<=0) {
            return res.status(400).json({ success: false, message: "Amount must be greater than zero." });
        }

        const lastTransaction = await Transaction.findOne({ accountNo }).sort({ tr_date: -1 });
        let balance = lastTransaction ? Number(lastTransaction.balance) : 0;

        if (type === 'debit') {
            if(parsedAmount>balance){
                return res.status(400).json({
                    success: false,
                    error: `Insufficient Balance. Please Enter a Valid Amount`,
                    balance: balance
                })
            }
            balance -= parsedAmount;
        } else if (type === 'credit') {
            balance += parsedAmount;
        } else {
            return res.status(400).json({ success: false, message: "Invalid transaction type" });
        }

        const transaction = new Transaction({
            accountNo,
            amount: parsedAmount,
            type,
            description,
            transactionId: uuidv4(),
            balance
        });
        await transaction.save();
        return res.status(201).json({ success: true, data: transaction });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};
exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const {amount,type,description}=req.body;
        const transaction=await Transaction.findById(id);
        if (!transaction) {
            return res.status(404).json({ success: false, message: 'Transaction not found' });
        }
        transaction.amount=amount;
        transaction.type=type;
        transaction.description=description;
        transaction.save();
        return res.status(200).json({ success: true, data: transaction });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findByIdAndDelete(id);
        if (!transaction) {
            return res.status(404).json({ success: false, message: 'Transaction not found' });
        }
        return res.status(200).json({ success: true, message: 'Transaction deleted successfully' });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

exports.getAllTransactions = async (req, res) => {
    try {
        const {accountNo}=req.query;
        if(!accountNo){
            return res.status(400).json({success:false, message:"Account Number is required."})
        }
        const transactions = await Transaction.find({accountNo}).sort({tr_date:-1});
        return res.status(200).json({ success: true, data: transactions });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};
