import { Module } from '@nestjs/common';
import { OrmModule } from './orm/orm.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    OrmModule,
    GraphQLModule.forRoot({}),
  ],
})
export class AppModule {}
