import { Injectable } from '@nestjs/common';
import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { AllChars } from 'src/interfaces/Allchars.interface';
import { SingleChar } from 'src/interfaces/SingleChar.interface';
@Injectable()
export class CharfinderService {
  constructor(
    private httpService: HttpService
    ) {}

  create(createCharfinderDto: CreateCharfinderDto) {
    return 'This action adds a new charfinder';
  }

  async findAll(): Promise<Observable<AllChars>> {
    return this.httpService.get('https://rickandmortyapi.com/api/character')
    .pipe(map(response => response.data));
  }

  async findOne(id: number): Promise<Observable<SingleChar>> {
    return this.httpService.get('https://rickandmortyapi.com/api/character/'+id)
    .pipe(map(response => response.data));
  }

  update(id: number, updateCharfinderDto: UpdateCharfinderDto) {
    return `This action updates a #${id} charfinder`;
  }

  remove(id: number) {
    return `This action removes a #${id} charfinder`;
  }
}
