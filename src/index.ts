import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'

import userRoutes from './routes/user.routes'

const body_parser = require('body-parser');
const app = express()
createConnection();

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
/* middleware para coger datos por body */
app.use(body_parser.urlencoded({extended:true}));

//routes
app.use(userRoutes)

app.listen(3000);
console.log('server en puerto', 3000)