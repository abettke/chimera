import { Module } from '@nestjs/common';
import { Environment } from './environment.provider';

@Module({
  providers: [
    Environment,
  ],
  exports: [
    Environment,
  ],
})
export class EnvironmentModule {}
