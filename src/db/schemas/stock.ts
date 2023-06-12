import { InferModel, eq, sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const stocks = pgTable("stocks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
});

export const selectStockSchema = createSelectSchema(stocks);
export const insertStockSchema = createInsertSchema(stocks);
export type Stock = z.infer<typeof selectStockSchema>;
export type NewStock = z.infer<typeof insertStockSchema>;
