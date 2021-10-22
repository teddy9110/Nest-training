import { PartialType } from '@nestjs/mapped-types';
import { CreateCharfinderDto } from './create-charfinder.dto';

export class UpdateCharfinderDto extends PartialType(CreateCharfinderDto) {}
