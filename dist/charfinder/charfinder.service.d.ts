import { CreateCharfinderDto } from './dto/create-charfinder.dto';
import { UpdateCharfinderDto } from './dto/update-charfinder.dto';
export declare class CharfinderService {
    create(createCharfinderDto: CreateCharfinderDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCharfinderDto: UpdateCharfinderDto): string;
    remove(id: number): string;
}
