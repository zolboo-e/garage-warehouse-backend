CREATE TABLE IF NOT EXISTS "stocks" (
	"hasWarranty" boolean DEFAULT false,
	"id" serial PRIMARY KEY NOT NULL,
	"inStock" integer DEFAULT 0 NOT NULL,
	"image" text,
	"minStock" integer DEFAULT 0 NOT NULL,
	"name" text NOT NULL,
	"repairPrice" integer NOT NULL,
	"storePrice" integer NOT NULL
);
