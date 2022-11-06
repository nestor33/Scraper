import { DataSource, DataSourceOptions } from 'typeorm';
import { Estate } from './entities/estate.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'scraper-db',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'Scraper',
  synchronize: true,
  logging: false,
  entities: [Estate],
  migrations: [__dirname + '/migrations/**/*.ts'],
  subscribers: [],
};

export const AppDataSource = new DataSource(dataSourceOptions);
