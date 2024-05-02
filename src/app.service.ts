import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  async getData(): Promise<any> {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${this.config}`,
      );
      return response.json();
    } catch (err) {
      return { msg: err.message };
    }
  }
}
