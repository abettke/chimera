import { Injectable } from '@nestjs/common';
import { pickBy } from 'lodash';

export enum NODE_ENV_TYPES {
  DEVELOPMENT = 'development',
  TEST = 'test',
  PRODUCTION = 'production',
}

@Injectable()
export class Environment {
  // Node
  readonly NODE_ENV: NODE_ENV_TYPES;
  // Database
  readonly CHIMERADB_USERNAME: string;
  readonly CHIMERADB_PASSWORD: string;
  readonly CHIMERADB_HOSTS: string;
  readonly CHIMERADB_NAME: string;
  readonly CHIMERADB_REPLICASET: string;
  // STMP
  readonly CHIMERASMTP_HOST: string;
  readonly CHIMERASMTP_USERNAME: string;
  readonly CHIMERASMTP_PASSWORD: string;
  // SECRETS
  readonly CHIMERA_SECRET: string;

  constructor() {
    this.NODE_ENV = NODE_ENV_TYPES[process.env.NODE_ENV.toUpperCase()];
    Object.assign(this, pickBy(
      process.env,
      (val, key) => key.includes('CHIMERA')),
    );
  }
}
