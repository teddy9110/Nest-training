import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharfinderService } from './charfinder.service';
import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Controller('charfinder')
export class CharfinderController {
  constructor(
    private readonly charfinderService: CharfinderService,
    private httpService: HttpService
    ) {}

  @Post()
  create(@Body() createCharfinderDto: CreateCharfinderDto) {
    return this.charfinderService.create(createCharfinderDto);
  }

  @Get('all-chars')
  async findAll(): Promise<Observable<any>> {
    return this.httpService.get('https://rickandmortyapi.com/api/character')
    .pipe(map(response => response.data));
  }

  @Get('find-char/:id')
  findOne(@Param('id') id: string) {
    return this.httpService.get('https://rickandmortyapi.com/api/character/'+id)
    .pipe(map(response => response.data));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharfinderDto: UpdateCharfinderDto) {
    return this.charfinderService.update(+id, updateCharfinderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charfinderService.remove(+id);
  }
}
