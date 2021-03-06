import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./application.module";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(5555, () => console.log("Application is listening on port 3000."));
}

bootstrap();
