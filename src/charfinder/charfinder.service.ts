import { Injectable } from '@nestjs/common';
import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';

@Injectable()
export class CharfinderService {
  create(createCharfinderDto: CreateCharfinderDto) {
    return 'This action adds a new charfinder';
  }

  findAll() {
    return `This action returns all charfinder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} charfinder`;
  }

  update(id: number, updateCharfinderDto: UpdateCharfinderDto) {
    return `This action updates a #${id} charfinder`;
  }

  remove(id: number) {
    return `This action removes a #${id} charfinder`;
  }
}
