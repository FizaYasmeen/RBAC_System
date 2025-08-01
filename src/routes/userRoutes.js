const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware")
const router = express.Router();

// admin access
router.get(
    "/admin",
    verifyToken,
    authorizeRoles("admin"),
    (req, res) => {
        res.json({ message: "welcome Admin" });
    })

// admin and manager access
router.get(
    "/manager",
    verifyToken,
    authorizeRoles("admin", "manager"),
    (req, res) => {
        res.json({ message: "welcome Manager" });
    })

//accessible by all
router.get(
    "/user",
    verifyToken, 
    authorizeRoles("admin", "manager", "user"),
    (req, res) => {
        res.json({ message: "welcome User" });
    })

module.exports = router;