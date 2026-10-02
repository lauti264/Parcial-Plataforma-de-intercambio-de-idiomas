import { Injectable } from '@nestjs/common';
import { CreateBloquearDto } from './dto/create-bloquear.dto';
import { UpdateBloquearDto } from './dto/update-bloquear.dto';

@Injectable()
export class BloquearService {
  create(createBloquearDto: CreateBloquearDto) {
    return 'This action adds a new bloquear';
  }

  findAll() {
    return `This action returns all bloquear`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloquear`;
  }

  update(id: number, updateBloquearDto: UpdateBloquearDto) {
    return `This action updates a #${id} bloquear`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloquear`;
  }
}
