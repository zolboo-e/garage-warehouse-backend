import type { INestApplication } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import { generateOpenApi } from "@ts-rest/open-api";

import { appContract } from "@/db/.";

export const setupSwagger = (app: INestApplication) => {
  const document = generateOpenApi(appContract, {
    info: {
      title: "Warehouse API",
      version: "0.0.0",
    },
  });

  SwaggerModule.setup("api", app, document);
};
