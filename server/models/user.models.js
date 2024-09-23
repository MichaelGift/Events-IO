const mongoose = reqiure('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter first name"],
        },

        lastName: {
            type: String,
            required: [true, "Please enter last name"],
        },

        email: {
            type: String,
            required: [true, "Please enter email address"],
        },

        password: {
            type: String,
            required: [true, "Please enter password"],
        },

        phoneNumber: {
            type: String,
            required: [true, "Please enter phone number"],
        },

        accountType: {
            type: String,
            enum: ['Admin', 'User', 'Organizer'],
            required: true,
            default: 'User',
        }
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;