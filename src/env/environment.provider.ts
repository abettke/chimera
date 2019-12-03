import { Injectable } from '@nestjs/common';
import { pickBy } from 'lodash';

@Injectable()
export class Environment {
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
    Object.assign(this, pickBy(
      process.env,
      (val, key) => key.includes('CHIMERA')),
    );
  }
}
