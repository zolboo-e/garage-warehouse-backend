import type { ExceptionFilter, NestApplicationOptions } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { Logger } from "nestjs-pino";

import { HttpExceptionFilter } from "@/filters/http_exception.filter";
import { AppModule } from "@/modules/app/app.module";
import { ZodExceptionFilter } from "./filters/zod_exception.filter";
import { setupSwagger } from "./swagger";

const bootstrap = async () => {
  const config: NestApplicationOptions = {
    bufferLogs: true,
    cors: {
      origin: "http://localhost:3000",
    },
    logger: [],
  };
  const app = await NestFactory.create(AppModule, config);

  //
  app.use(cookieParser());

  //
  const globalFilters: ExceptionFilter<any>[] = [
    new HttpExceptionFilter(),
    new ZodExceptionFilter(),
  ];
  app.useGlobalFilters(...globalFilters);

  //
  // app.useLogger(app.get(Logger));

  //
  setupSwagger(app);

  await app.listen(3001);
};
bootstrap();
