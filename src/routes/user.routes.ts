import {Router} from 'express'
const router = Router()
 
import {getUsers} from '../controller/user.controller'

router.get('/user', getUsers);

export default router