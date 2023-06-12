import { IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateDogDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  @Min(0)
  tail_length: number;

  @IsString()
  @IsNotEmpty()
  @Min(0)
  weight: number;
}
