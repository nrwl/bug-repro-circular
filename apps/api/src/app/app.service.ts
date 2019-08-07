import { Injectable } from '@nestjs/common';
import { Message } from '@circular/api-interfaces';
import { X } from './app.controller';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' + X };
  }
}
