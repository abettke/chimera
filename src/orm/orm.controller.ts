import { Controller, Get } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Model } from './models';

@Controller(`/orm`)
export class OrmController {
  constructor(
    @InjectModel(Model) private readonly ChimeraModel: ReturnModelType<any>,
  ) {}

  @Get()
  async getModel(): Promise<string> {
    await this.ChimeraModel.find();
    return 'Hello ORM';
  }
}
