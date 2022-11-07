import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estate } from './entities/estate.entity';
import { EstateModel } from './models/estate';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Estate)
    private estatesRepository: Repository<Estate>,
    private readonly httpService: HttpService,
  ) {}

  async scrapeEstates(): Promise<EstateModel[]> {
    const response: any = await firstValueFrom(
      this.httpService.get(
        'https://www.sreality.cz/api/en/v2/estates?category_main_cb=1&category_type_cb=1&per_page=500&tms=1667210981665',
      ),
    );

    const estates: EstateModel[] = response.data._embedded.estates.map(
      (estate: any) => ({
        title: estate.name,
        url: `https://www.sreality.cz/detail/prodej/byt/2+1/prostejov-prostejov-dobrovskeho/${estate.hash_id}`,
        imageUrl: estate._links.images[0].href,
      }),
    );

    estates.forEach((estate) => {
      this.estatesRepository.insert(estate);
    });

    return estates;
  }

  async getEstates(): Promise<Estate[]> {
    const estates = await this.estatesRepository.find();
    return estates;
  }
}
