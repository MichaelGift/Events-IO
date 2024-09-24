const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransactionSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true, "Please enter amount"],
        },
        status: {
            type: String,
            enum: ['Pending', 'Completed', 'Failed'],
            required: true,
            default: 'Pending',
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    }, {
        timestamps: true,
    }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;