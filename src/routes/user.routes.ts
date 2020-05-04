import { Router } from 'express';
const router = Router();
 
import {
    getUsers, 
    createUser,
    getUser
} from '../controller/user.controller'

import { create } from 'domain';
/*  */
router.get('/user', getUsers);
router.post('/createUsers', createUser);
router.get('/user/:id', getUser);

export default router