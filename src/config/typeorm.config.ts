import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from '../entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // Docker : "mysql" localhost
  port: 5432,
  username: 'nestang20', // emp
  password: 'nestang20',
  database: 'nestang20',
  entities: entities,
  synchronize: false, // ⚠️ à désactiver en production
  retryAttempts: 10, // Nombre de tentatives si la connexion échoue
  retryDelay: 3000, // Attente entre les tentatives (ms)
};
