import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { TypegooseModuleOptions, TypegooseOptionsFactory } from 'nestjs-typegoose';
import { Environment, NODE_ENV_TYPES } from '../env';

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
  constructor(private readonly env: Environment) {
    mongoose.set('debug', this.env.NODE_ENV === NODE_ENV_TYPES.DEVELOPMENT);
  }
}
