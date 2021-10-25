import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AllChars } from 'src/interfaces/Allchars.interface';
import { SingleChar } from 'src/interfaces/SingleChar.interface';
export declare class CharfinderService {
    private httpService;
    constructor(httpService: HttpService);
    create(createCharfinderDto: CreateCharfinderDto): string;
    findAll(): Promise<Observable<AllChars>>;
    findOne(id: number): Promise<Observable<SingleChar>>;
    update(id: number, updateCharfinderDto: UpdateCharfinderDto): string;
    remove(id: number): string;
}
