import { ConfigModule, ConfigService } from "@nestjs/config";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as postgres from "postgres";

export const databaseProviders = [
  {
    provide: "DRIZZLE",
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const url = configService.get("DATABASE_URL");
      const client = postgres(url, { max: 1, ssl: "require" });

      const db = drizzle(client);

      await migrate(db, { migrationsFolder: "drizzle" });

      return db;
    },
  },
];
