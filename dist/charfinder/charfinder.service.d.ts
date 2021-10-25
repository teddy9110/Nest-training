import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { allChars } from 'src/interfaces/allchars.interface';
import { singleChar } from 'src/interfaces/singleChar.interface';
export declare class CharfinderService {
    private httpService;
    constructor(httpService: HttpService);
    create(createCharfinderDto: CreateCharfinderDto): string;
    findAll(): Promise<Observable<allChars>>;
    findOne(id: number): Promise<Observable<singleChar>>;
    update(id: number, updateCharfinderDto: UpdateCharfinderDto): string;
    remove(id: number): string;
}
