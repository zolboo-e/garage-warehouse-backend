import { Module } from "@nestjs/common";

import { DatabaseModule } from "@/modules/database/database.module";

import { StocksService } from "./stocks.service";
import { StocksController } from "./stocks.controller";

@Module({
  controllers: [StocksController],
  imports: [DatabaseModule],
  providers: [StocksService],
})
export class StocksModule {}
