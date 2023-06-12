import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DogRepository } from '../../shared/repositories/dog.repository';
import { Dog } from '../../shared/models/dog.model';
import { CreateDogDto } from './dto/dog.create.dto';

@Injectable()
export class DogService {
  constructor(private readonly dogRepository: DogRepository) {}

  async findByName(name: string) {
    return await this.dogRepository.findByName(name);
  }

  async findAll(dto): Promise<Dog[]> {
    return await this.dogRepository.findAll(dto);
  }

  async create(dto: CreateDogDto): Promise<Dog> {
    const dogNameCheck = await this.findByName(dto.name);

    if (dogNameCheck) {
      throw new HttpException(
        `Dog with name ${dto.name} exist`,
        HttpStatus.CONFLICT,
      );
    }
    return await this.dogRepository.create(dto);
  }
}
