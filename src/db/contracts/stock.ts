import { z } from "zod";

import { insertStockSchema, selectStockSchema } from "../schemas/stock";

import { c } from ".";

export const stockContract = c.router({
  getStocks: {
    method: "GET",
    path: "/stocks",
    query: z.object({}),
    responses: {
      200: selectStockSchema.array(),
    },
    summary: "Get all stocks",
  },
  getStock: {
    method: "GET",
    path: "/stocks/:id",
    responses: {
      200: selectStockSchema,
    },
    summary: "Get a stock",
  },
  createStock: {
    method: "POST",
    path: "/stocks",
    body: insertStockSchema,
    responses: {
      201: z.object({}),
    },
    summary: "Insert a stock",
  },
});
