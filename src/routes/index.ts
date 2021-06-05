import express, { Router } from 'express';

import userRouter from './user';
import productRouter from './productRouter';
import trolleyRouter from './trolley';

const router: Router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send('Alive');
});

router.use('/user', userRouter);
router.use('/sort', productRouter);
router.use('/trolleyTotal', trolleyRouter);

export { router };
