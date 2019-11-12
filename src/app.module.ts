import { Module } from '@nestjs/common';
import { TypegooseModule, TypegooseConnectionOptions } from "nestjs-typegoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [
    TypegooseModule.forRoot(`mongodb://chimera:chimera@localhost:27017/chimera`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    OrmModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
