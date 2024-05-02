import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private appservice: AppService) {}
  
  @Get('getdata')
  async getData() {
    return this.appservice.getData();
  }
}
