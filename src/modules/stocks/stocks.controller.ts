import { Controller, Req } from "@nestjs/common";
import type { Request } from "express";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";

import { appContract } from "@/db/.";

import { StocksService } from "./stocks.service";
@Controller()
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @TsRestHandler(appContract.stocks)
  async handler(@Req() request: Request) {
    return tsRestHandler(appContract.stocks, {
      getStocks: async () => {
        const stocks = await this.stocksService.getStocks();

        return { status: 200, body: stocks };
      },
      getStock: async ({ params: { id } }) => {
        const stock = await this.stocksService.getStock(Number(id));

        if (!stock) {
          return { status: 404, body: null };
        }

        return { status: 200, body: stock };
      },
      createStock: async ({ body }) => {
        const stock = await this.stocksService.createStock(body);

        return { status: 201, body: stock };
      },
      deleteStock: async ({ params: { id } }) => {
        const stock = await this.stocksService.deleteStock(Number(id));

        if (!stock) {
          return { status: 404, body: null };
        }

        return { status: 200, body: stock };
      },
    });
  }
}
