const express = require('express');
const routes = express();
const controller = require('../Controller/userController')

routes.get('/',controller.loadLogin);
routes.post('/',controller.verifyLogin);
routes.get('/home',controller.loadHome);
routes.post('/logout',controller.logOut);
routes.get('*',controller.loadHome)

module.exports = routes;