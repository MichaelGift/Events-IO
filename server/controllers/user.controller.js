const User = require('../models/user.models');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.status(200).json({
            message: "User created successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getUserById = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});

        if (!user) return res.status(404).json({message: "User could not be found"});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) return res.status(404).json({message: "User could not be found"});
        return res.status(200).json({message: "User delete successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}