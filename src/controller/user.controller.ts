import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {User} from '../entity/User'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users)
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    //console.log(req.body)
    const newUser = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results)
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    return res.json(user)
}