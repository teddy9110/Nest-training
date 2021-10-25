import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharfinderService } from './charfinder.service';
import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';


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
  async findAll() {
    const allchars = this.charfinderService.findAll();
    console.log(allchars);
    return allchars
  }

  @Get('find-char/:id')
  async findOne(@Param('id') id: number) {
    const singleChar = this.charfinderService.findOne(id);
    console.log(singleChar);
    return singleChar
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
