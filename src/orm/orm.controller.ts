import { Controller, Get } from '@nestjs/common';
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from "nestjs-typegoose";
import { Model } from './models';

@Controller('orm')
export class OrmController {
  constructor(@InjectModel(Model) private readonly ModelService: ReturnModelType<typeof Model>) {}

  @Get()
  findAll(): string{
    console.log(this.ModelService);
    return 'you found them all';
  }

}
