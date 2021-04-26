const express = require('express');
const router = express.Router();
const controladorHome = require('../controller/homeController');

router.get ('/', (req, res) => {
    const products = controladorHome.leerTodos();
    console.log('volvi del controlador');
    res.render('home', {products});
})

module.exports = router;