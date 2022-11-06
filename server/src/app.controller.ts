import { EstateModel } from './models/estate';
import { Controller, Get } from '@nestjs/common';
import { Estate } from './entities/estate.entity';
import { AppService } from './app.service';

@Controller()
export class EstateController {
  constructor(private readonly estateService: AppService) {}

  @Get('scrapeEstates')
  scrapeEstates(): Promise<EstateModel[]> {
    return this.estateService.scrapeEstates();
  }

  @Get('getEstates')
  getEstates(): Promise<Estate[]> {
    return this.estateService.getEstates();
  }
}
