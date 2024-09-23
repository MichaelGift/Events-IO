const Event = require('../models/event.model');

const createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        return res.status(201).json({
            message: "Event created successfully",
            event,
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        return res.status(200).json({events});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const getEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await Event.findById(id);
        if (event) {
            return res.status(200).json({event});
        }
        return res.status(404).send("Event not found");
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const updateEvent = async (req, res) => {
    try {
        const {id} = req.params;
        await Event.findByIdAndUpdate(id, req.body, {new: true}, (error, event) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            if (!event) {
                return res.status(404).send("Event not found");
            }
            return res.status(200).json({event});
        }
        );
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await Event.findByIdAndDelete(id);
        if (event) {
            return res.status(200).send("Event deleted successfully");
        }
        return res.status(404).send("Event not found");
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    createEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent,
}