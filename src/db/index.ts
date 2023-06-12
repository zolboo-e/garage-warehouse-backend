import { c } from "./contracts";
import { stockContract } from "./contracts/stock";

export const appContract = c.router({
  stocks: stockContract,
});
