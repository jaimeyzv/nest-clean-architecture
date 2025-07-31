import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'LAPTOP-1OBQVH3S\\SQLEXPRESS2022',
  port: 55463,
  username: 'sa',
  password: '123456',
  database: 'GrowWithLove',
  //entities: [UserEntity, GroupActivityEntity, RequirementEntity...etc], // todas tus entidades aquí
  entities: [__dirname + '\\entities\\*.js'],
  synchronize: true, // solo en desarrollo
  options: {
    encrypt: false, // importante para evitar error SSL
    trustServerCertificate: true, // necesario si usas SQL Server local sin certificado
  },
};
console.log(typeOrmConfig);
