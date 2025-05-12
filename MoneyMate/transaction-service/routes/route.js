const express=require("express");
const { addTransaction, getAllTransactions, updateTransaction, deleteTransaction } = require("../controller/TransactionController");
const router=express.Router();

router.post("/transactions",addTransaction);
router.get("/transactions",getAllTransactions);
router.put("/transactions/:id",updateTransaction);
router.delete("/transactions/:id",deleteTransaction);

module.exports=router