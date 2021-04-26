const express = require ("express");
const app = express ();

const path = require ("path");

const puerto = process.env.PORT;

const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.set ('view engine', 'ejs');

const publicPath = path.join (__dirname, "public")
app.use (express.static (publicPath));

app.use ('/', homeRouter)
app.use ('/products', productRouter)
//app.use ('/', userRouter)

app.listen (puerto || 3000, function() {
    console.log ("Servidor corriendo en el puerto ");
});