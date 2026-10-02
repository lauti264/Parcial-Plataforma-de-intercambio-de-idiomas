import { Injectable } from '@nestjs/common';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { PersonaService } from '../persona/persona.service';
import { Preferencia } from './entities/preferencia.entity';
@Injectable()
export class PreferenciasService {
  static Preferencias: Preferencia[] = []
  constructor(private readonly personaService: PersonaService){}
  create(createPreferenciaDto: CreatePreferenciaDto) {
    const newPreferencia = new Preferencia()
    let personaC = this.personaService.findOne(createPreferenciaDto.alias)
    newPreferencia.noMolestar = true
    newPreferencia.compatibles.push(personaC)
    return 
  }

  findAll() {
    return `This action returns all preferencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preferencia`;
  }

  update(id: number, updatePreferenciaDto: UpdatePreferenciaDto) {
    return `This action updates a #${id} preferencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} preferencia`;
  }
}
