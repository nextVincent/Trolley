import express, { Router } from 'express';

import { getTrolleyTotal } from '../service/trolley.service';

const trolleyRouter: Router = express.Router();

trolleyRouter.post('/', (req, res) => {
  try {
    const payload = req.body;
    if (!payload) {
      throw new Error('Body required');
    }
    const data = getTrolleyTotal(payload);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default trolleyRouter;
