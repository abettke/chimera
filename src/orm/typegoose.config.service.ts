import { Injectable } from '@nestjs/common';
import {
  TypegooseOptionsFactory,
  TypegooseModuleOptions,
} from 'nestjs-typegoose';
import { Environment } from '../env';

@Injectable()
export class TypegooseConfigService implements TypegooseOptionsFactory {
  createTypegooseOptions(): TypegooseModuleOptions {
    return {
      uri: `mongodb://` +
        `${this.env.CHIMERADB_USERNAME}:${this.env.CHIMERADB_PASSWORD}@` +
        `${this.env.CHIMERADB_HOSTS}/` +
        `${this.env.CHIMERADB_NAME}?` +
        `replicaSet=${this.env.CHIMERADB_REPLICASET}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
  constructor(private readonly env: Environment) {}
}
