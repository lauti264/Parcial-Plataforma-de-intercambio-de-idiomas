import { PartialType } from '@nestjs/mapped-types';
import { CreateBloquearDto } from './create-bloquear.dto';

export class UpdateBloquearDto extends PartialType(CreateBloquearDto) {}
