import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { models, mysqlConfig } from './shared/configs';
import { DogModule } from './modules/dog/dog.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' }),
    SequelizeModule.forRoot({
      ...mysqlConfig,
      models,
      logging: true,
    }),
    DogModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
