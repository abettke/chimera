import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Model } from './models';
import { OrmController } from './orm.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([
      Model
    ])
  ],
  controllers: [
    OrmController
  ]
})
export class OrmModule {}
