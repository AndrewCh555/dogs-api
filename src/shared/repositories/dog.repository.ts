import { InjectModel } from '@nestjs/sequelize';
import { InternalServerErrorException } from '@nestjs/common';
import { Dog } from '../models/dog.model';
import { CreateDogDto } from '../../modules/dog/dto/dog.create.dto';
import { SearchPaginationDto } from '../../modules/dog/dto/filter.dto';

export class DogRepository {
  constructor(
    @InjectModel(Dog)
    private readonly dog: typeof Dog,
  ) {}

  async findByName(name: string): Promise<Dog> {
    return await this.dog.findOne({
      where: { name },
    });
  }

  async findAll(dto: SearchPaginationDto): Promise<Dog[]> {
    type findAllParams = {
      limit?: number;
      offset?: number;
      order?: any;
    };
    const params: findAllParams = {
      limit: dto.page,
      offset: dto.take,
    };
    if (dto.attribute && dto.order) {
      params.order = [[`${dto.attribute}`, `${dto.order}`]];
    }

    return await this.dog.findAll({ ...params });
  }

  async create(dto: CreateDogDto): Promise<Dog> {
    try {
      return await this.dog.create({ ...dto });
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
