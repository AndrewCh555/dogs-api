import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Dog } from '../../shared/models/dog.model';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/dog.create.dto';
import { SearchPaginationDto } from './dto/filter.dto';
import { ApiInternalServerErrorResponse } from '@nestjs/swagger';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(@Query() dto: SearchPaginationDto): Promise<Dog[]> {
    return this.dogService.findAll(dto);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async createDog(@Body() dog: CreateDogDto): Promise<any> {
    return this.dogService.create(dog);
  }
}
