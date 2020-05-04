import { Router } from 'express';
const router = Router();
 
import {
    getUsers, 
    createUser,
    getUser,
    updateUser,
    deleteUser
} from '../controller/user.controller';

import { create } from 'domain';

router.get('/user', getUsers);
router.post('/createUsers', createUser);
router.get('/user/:id', getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router