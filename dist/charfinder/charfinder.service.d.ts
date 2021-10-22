import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class CharfinderService {
    create(createCharfinderDto: CreateCharfinderDto, httpService: HttpService): string;
    findAll(): Promise<Observable<any>>;
    findOne(id: number): string;
    update(id: number, updateCharfinderDto: UpdateCharfinderDto): string;
    remove(id: number): string;
}
