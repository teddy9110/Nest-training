import { Module } from '@nestjs/common';
import { CharfinderService } from './charfinder.service';
import { CharfinderController } from './charfinder.controller';

@Module({
  controllers: [CharfinderController],
  providers: [CharfinderService]
})
export class CharfinderModule {}
