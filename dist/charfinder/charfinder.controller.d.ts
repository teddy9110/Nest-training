import { CharfinderService } from './charfinder.service';
import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class CharfinderController {
    private readonly charfinderService;
    private httpService;
    constructor(charfinderService: CharfinderService, httpService: HttpService);
    create(createCharfinderDto: CreateCharfinderDto): string;
    findAll(): Promise<Observable<any>>;
    findOne(id: string): Observable<any>;
    update(id: string, updateCharfinderDto: UpdateCharfinderDto): string;
    remove(id: string): string;
}
