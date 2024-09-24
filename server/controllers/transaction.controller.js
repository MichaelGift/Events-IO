const Transaction = require('../models/transaction.model');

const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            message: "Success", transaction
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({transactions: transactions});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const getTransactionById = async (req, res) => {
    try {
        const {id} = req.params;
        const transaction = await Transaction.findById(id);

        if (!transaction) return res.status(404).send("Transaction not found");
        return res.status(200).json({transaction});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

const updateTransaction = async (req, res) => {

    try {
        const {id} = req.params;
        const transaction = await Transaction.findByIdAndUpdate(id, req.body, {new: true});

        if (!transaction) return res.status(404).json({message: "Transaction not found"});
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const deleteTransaction = async (req, res) => {
    try {
        const {id} = req.params;
        const transaction = await Transaction.findByIdAndDelete(id);

        if (!transaction) return res.status(404).json("Transaction not found");
        return res.status(200).json({message: "Transaction deleted successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
}