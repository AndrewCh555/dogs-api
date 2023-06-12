import { IntersectionType } from '@nestjs/swagger';
import { PaginationDto } from './pagination.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { AttributeDto } from './attribute.dto';
import { OrderedBy } from '../../../common/enums/orderedBy.enum';
import { OrderedByDirection } from '../../../common/enums/orderedByDirection.enum';

export class SearchPaginationDto extends IntersectionType(
  AttributeDto,
  PaginationDto,
) {
  @IsEnum(OrderedBy)
  @IsOptional()
  attribute?: OrderedBy;

  @IsEnum(OrderedByDirection)
  @IsOptional()
  order?: OrderedByDirection;
}
