const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// noinspection JSCheckFunctionSignatures
router.get("/", ctrl.output.home);

// noinspection JSCheckFunctionSignatures
router.get("/login", ctrl.output.login);

router.post("/login",ctrl.process.login);

// noinspection JSCheckFunctionSignatures
router.get("/register",ctrl.output.register);

module.exports = router;