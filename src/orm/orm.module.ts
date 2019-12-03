import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TypegooseConfigService } from './typegoose.config.service';
import { EnvironmentModule, Environment } from '../env';
import { OrmController } from './orm.controller';
import { Model } from './models';

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      imports: [EnvironmentModule],
      useClass: TypegooseConfigService,
      inject: [Environment],
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
