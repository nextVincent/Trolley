import { getTotalPrice } from './module/wooliexs';

const getTrolleyTotal = async (dto: any): Promise<number> => {
  return await getTotalPrice(dto);
};


// best try without resource calculator
/**
 * With currenct calculator behaviour, best guess following logic should appear
 * - Products[] and Quantities[] mandatory and must match on each product.name
 * - Specials[] can be empty
 * - Specials[] serves as discount rules
 * - Specials[] special total amount applies only if specific rule, product quantity 
 *      less than(or equal) with cart quantity, otherwise no special price
 * - if multiple products, only one special rule (container all/partial products) can apply once, no overlap special calculation
 * - if single products, multiple special rule can apply
 */


export { getTrolleyTotal };