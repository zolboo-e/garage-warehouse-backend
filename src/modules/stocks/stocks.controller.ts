import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";

import { StocksService } from "./stocks.service";

import { appContract } from "@/db/.";

@Controller()
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @TsRestHandler(appContract.stocks)
  async handler() {
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
    });
  }
}
