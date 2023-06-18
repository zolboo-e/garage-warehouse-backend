import { InferModel, eq, sql } from "drizzle-orm";
import {
  boolean,
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
  hasWarranty: boolean("hasWarranty").default(false),
  id: serial("id").primaryKey(),
  inStock: integer("inStock").notNull().default(0),
  image: text("image"),
  minStock: integer("minStock").notNull().default(0),
  name: text("name").notNull(),
  repairPrice: integer("repairPrice").notNull(),
  storePrice: integer("storePrice").notNull(),
});

export const selectStockSchema = createSelectSchema(stocks);
export const insertStockSchema = createInsertSchema(stocks);
export type Stock = z.infer<typeof selectStockSchema>;
export type NewStock = z.infer<typeof insertStockSchema>;
