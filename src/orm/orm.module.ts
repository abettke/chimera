import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TypegooseConfigService } from './typegoose.config.service';
import { Model } from './models';
import { OrmController } from './orm.controller';

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useClass: TypegooseConfigService,
    }),
    TypegooseModule.forFeature([
      Model,
    ]),
  ],
  controllers: [
    OrmController,
  ],
})
export class OrmModule {}
