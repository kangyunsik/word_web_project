const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// noinspection JSCheckFunctionSignatures
router.get("/", ctrl.output.home);

// noinspection JSCheckFunctionSignatures
router.get("/login", ctrl.output.login);

router.post("/login",ctrl.process.login);

module.exports = router;