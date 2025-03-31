const express = require('express');
const Router=express.Router();

const{
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
}=require('../controllers/userController');
const {protect}=require('../middlewares/authmiddlewares');
Router.route('/').post(registerUser);
Router.route('login').post(loginUser);

Router.get('/profile',protect,getUserProfile);
Router.put('/profile', protect, updateUserProfile);

module.exports = Router;
