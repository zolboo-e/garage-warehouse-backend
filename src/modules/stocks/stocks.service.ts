import { Inject, Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

import { stocks } from "@/db/schemas/stock";
import type { NewStock } from "@/db/schemas/stock";

@Injectable()
export class StocksService {
  constructor(
    @Inject("DRIZZLE")
    private db: PostgresJsDatabase,
  ) {}

  async getStocks() {
    return await this.db.select().from(stocks);
  }
  async getStock(id: number) {
    return (await this.db.select().from(stocks).where(eq(stocks.id, id))).find(
      Boolean,
    );
  }
  async createStock(stock: NewStock) {
    // FIXME: all optional?
    return await this.db.insert(stocks).values(stock as any);
  }
}
