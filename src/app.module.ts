import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CharfinderController } from './charfinder/charfinder.controller';
import { AppService } from './app.service';
import { CharfinderService } from './charfinder/charfinder.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [AppController, CharfinderController],
  providers: [AppService, CharfinderService],
})
export class AppModule {}
