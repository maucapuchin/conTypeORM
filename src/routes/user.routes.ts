import { Router } from 'express';
const router = Router();
 
import {
    getUsers, 
    createUser
} from '../controller/user.controller'
import { create } from 'domain';

router.get('/user', getUsers);
router.post('/createUsers', createUser);

export default router