import { Injectable } from '@nestjs/common';
import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class CharfinderService {
  create(createCharfinderDto: CreateCharfinderDto,
    httpService: HttpService,
    ) {
    return 'This action adds a new charfinder';
  }

  async findAll(): Promise<Observable<any>> {
    return this.httpService.get('https://rickandmortyapi.com/api/character')
    .pipe(map(response => response.data));
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
