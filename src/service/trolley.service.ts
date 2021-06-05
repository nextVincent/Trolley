import { getTotalPrice } from './module/wooliexs';

const getTrolleyTotal = async (dto: any): Promise<number> => {
  return await getTotalPrice(dto);
};


// best try without resource calculator
/**
 * With currenct calculator behaviour, best guess following logic should appear
 * - Products[] and Quantities[] mandatory and must match on each product.name
 * - Specials[] can be empty
 * - Specials[] serves as discount rules, can be multiple
 * - Specials[] special total amount applies only if specific rule quantity 
 *      exact match with cart quantity, otherwise no special price
 * 
 */

export { getTrolleyTotal };