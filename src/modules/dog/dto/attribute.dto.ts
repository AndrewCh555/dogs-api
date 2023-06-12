import { IsOptional, IsString } from 'class-validator';

export class AttributeDto {
  @IsOptional()
  @IsString()
  attribute?: string;
}
