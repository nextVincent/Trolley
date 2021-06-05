import express, { Router } from 'express';

import { userGet } from '../service/user.service';

const userRouter: Router = express.Router();

userRouter.get('/', (req, res) => {
    const userData = userGet();
    res.status(200).send(userData);
})

export default userRouter;
