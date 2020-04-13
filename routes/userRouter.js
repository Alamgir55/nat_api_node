const express = require('express');

const userController = require('../controllers/userController');

const route = express.Router();

route.route('').get(userController.getAllUsers).post(userController.createUsers);
route.route('/:user').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = route;