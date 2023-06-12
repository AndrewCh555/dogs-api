import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DogRepository } from '../../shared/repositories/dog.repository';
import { DogService } from './dog.service';
import { Dog } from '../../shared/models/dog.model';
import { DogController } from './dog.controller';

@Module({
  imports: [SequelizeModule.forFeature([Dog])],
  controllers: [DogController],
  providers: [DogService, DogRepository],
  exports: [DogService],
})
export class DogModule {}
