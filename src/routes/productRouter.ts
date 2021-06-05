import express, { Router } from 'express';

import { getSortedProducts } from '../service/sort.service';
import { SortOptionEnum } from '../shared/enum';

const productRouter: Router = express.Router();

productRouter.get('/', async (req, res) => {
  try {
    const sortOption = req.query.sortOption as string;
    if (
      !sortOption ||
      Object.entries(SortOptionEnum)
        .map(([key, val]) => val as string)
        .indexOf(sortOption) === -1
    ) {
      throw new Error('Invalid request params "sortOption"');
    }
    let response = await getSortedProducts(sortOption);
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default productRouter;
