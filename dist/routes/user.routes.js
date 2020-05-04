"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var user_controller_1 = require("../controller/user.controller");
/*  */
router.get('/user', user_controller_1.getUsers);
router.post('/createUsers', user_controller_1.createUser);
router.get('/user/:id', user_controller_1.getUser);
exports.default = router;
