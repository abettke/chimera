import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TypegooseConfigService } from './typegoose.config.service';
import { EnvironmentModule } from '../env/environment.module';
import { Environment } from '../env/environment.provider';
import { Model } from './models';
import { OrmController } from './orm.controller';

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
