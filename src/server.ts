import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { router } from './routes';

const bootstrap = async () => {
  const app = express();
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/api', router);

  const port = process.env.PORT || 5000;
  await app.listen(port, () => {
    console.log(`${port} server running...`);
  });
};

bootstrap();
