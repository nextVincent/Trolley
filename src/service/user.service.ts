import { User } from '../interface';
import { TOKEN } from '../shared/constant';

const userGet = (): User => {
  return {
    name: 'Weixin Liang (Vincent)',
    token: TOKEN,
  };
};

export { userGet };
