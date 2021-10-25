import { CharfinderService } from './charfinder.service';
import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
export declare class CharfinderController {
    private readonly charfinderService;
    private httpService;
    constructor(charfinderService: CharfinderService, httpService: HttpService);
    create(createCharfinderDto: CreateCharfinderDto): string;
    findAll(): Promise<import("rxjs").Observable<import("../interfaces/Allchars.interface").AllChars>>;
    findOne(id: number): Promise<import("rxjs").Observable<import("../interfaces/SingleChar.interface").SingleChar>>;
    update(id: string, updateCharfinderDto: UpdateCharfinderDto): string;
    remove(id: string): string;
}
