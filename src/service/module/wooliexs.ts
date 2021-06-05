import { GotClient } from '../../shared/httpClient';
import { TOKEN } from '../../shared/constant';
import { ShopHistory, Product } from '../../interface';

const httpClient = new GotClient({
  prefixUrl: 'http://dev-wooliesx-recruitment.azurewebsites.net/',
});

const getShopperHistory = async (): Promise<ShopHistory> => {
  return await httpClient._client
    .get(`api/resource/shopperHistory?token=${TOKEN}`)
    .json();
};

const getProducts = async (): Promise<Product[]> => {
  return await httpClient._client
    .get(`api/resource/products?token=${TOKEN}`)
    .json();
};

const getTotalPrice = async (cartDto: any): Promise<number> => {
  return await httpClient._client
    .post(`api/resource/trolleyCalculator?token=${TOKEN}`, {
      json: cartDto,
    })
    .json();
};

export { getShopperHistory, getProducts, getTotalPrice };
