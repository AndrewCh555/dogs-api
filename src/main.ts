import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './shared/configs';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './shared/all-exeptions.filter';

const port = appConfig.getPort();
const host = appConfig.getHost();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(port, host, () =>
    console.log(`Server started on port ${port}`),
  );
}
bootstrap();
