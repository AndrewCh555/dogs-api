import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Get('ping')
  ping(): string {
    return 'Dogshouseservice.Version1.0.1';
  }
}
