import { getProducts, getShopperHistory } from './module/wooliexs';
import { Product, CustomerHistory } from '../interface';
import { SortOptionEnum } from '../shared/enum';


export const getSortedProducts = async (
  sortOption: string
): Promise<Product[]> => {
  const products = await getProducts();
  let response;
  switch (sortOption) {
    case SortOptionEnum.LOW:
      response = products.sort((a, b) => a.price - b.price);
      break;
    case SortOptionEnum.HIGH:
      response = products.sort((a, b) => b.price - a.price);
      break;
    case SortOptionEnum.ASC:
      response = products.sort((a, b) => (a.name > b.name ? -1 : 1));
      break;
    case SortOptionEnum.DESC:
      response = products.sort((a, b) => (b.name > a.name ? -1 : 1));
      break;
    case SortOptionEnum.REMD:
      const shopistory = await getShopperHistory();
      // sum product quantity bought by customers as popularity
      const popularity = shopistory.reduce((acc, history: CustomerHistory) => {
        const { products } = history;
        for (const product of products) {
          const { name, quantity } = product;
          if (!acc[name]) {
            acc[name] = quantity;
          } else {
            acc[name] += quantity;
          }
        }
        return acc;
      }, {});
      // sort by most sold as quantity
      response = products
        .map(el => ({
          ...el,
          ...(popularity[el.name] && { quantity: popularity[el.name] }),
        }))
        .sort((a, b) => b.quantity - a.quantity);
      break;
    default:
      break;
  }
  return response;
};
