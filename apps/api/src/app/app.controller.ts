import { Controller, Get } from '@nestjs/common';

import { Message } from '@circular/api-interfaces';

import { AppService } from './app.service';

export const X = 100;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
