import { Injectable } from '@nestjs/common';
import {
  TypegooseOptionsFactory,
  TypegooseModuleOptions,
} from 'nestjs-typegoose';

@Injectable()
export class TypegooseConfigService implements TypegooseOptionsFactory {
  createTypegooseOptions(): TypegooseModuleOptions {
    return {
      uri: `mongodb://chimera:chimera@chimeradb-primary:27017,chimeradb-ares:27017,chimeradb-boreas:27017/chimera?replicaSet=crs`.trim(),
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
