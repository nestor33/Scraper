import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { EstateController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estate } from './entities/estate.entity';
import { dataSourceOptions } from './data-sourse';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Estate]),
  ],
  controllers: [EstateController],
  providers: [AppService, HttpModule],
})
export class AppModule {}
