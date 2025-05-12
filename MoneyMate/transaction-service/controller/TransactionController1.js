const Transaction = require("../model/TransactionModel");
const { v4: uuidv4 } = require('uuid');
exports.addTransaction = async (req, res) => {
    try {
        const transaction = new Transaction({
            ...req.body,
            transactionId: uuidv4() 
        });
        await transaction.save();
        return res.status(201).json({ success: true, data: transaction });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};
exports.updateTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!transaction) {
            return res.status(404).json({ success: false, message: 'Transaction not found' });
        }
        return res.status(200).json({ success: true, data: transaction });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
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
        const transactions = await Transaction.find();
        return res.status(200).json({ success: true, data: transactions });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};
