const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(3000);
console.log('Servidor en puerto - - iniciado', 3000);

//rutas
app.use(userRoutes);

