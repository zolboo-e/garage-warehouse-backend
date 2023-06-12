import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/modules/app/app.module";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  await app.listen(3001);
};
bootstrap();
