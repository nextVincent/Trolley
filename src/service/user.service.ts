import { User } from '../interface';
import { TOKEN } from '../shared/constant';

const userGet = (): User => {
  return {
    name: 'Vincent Liang',
    token: TOKEN,
  };
};

export { userGet };
