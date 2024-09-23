const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter event name"],
        },

        description: {
            type: String,
            required: [true, "Please enter event description"],
        },

        date: {
            type: Date,
            required: true,
        },

        location: {
            type: String,
            required: [true, "Please enter event location"],
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        attendees: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
        ],
    }
);

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;