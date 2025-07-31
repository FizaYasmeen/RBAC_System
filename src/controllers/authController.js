const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const register = async (req, res) => {
    const {username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
};

const login = async (req, res) => {
    const {username, password} = req.body;
};

module.exports ={
    register,
    login,
};