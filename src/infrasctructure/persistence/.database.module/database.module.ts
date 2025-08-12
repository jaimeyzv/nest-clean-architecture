import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from '../entities/member.entity';
import { MemberRepository } from '../repositories/member.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity])],
  providers: [
    MemberRepository,
    {
      provide: 'IMemberRepository', // la interfaz como token
      useClass: MemberRepository, // implementación concreta
    },
  ],
  exports: ['IMemberRepository'],
})
export class DatabaseModule {}
