import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { PreferenciasService } from '../preferencias/preferencias.service';
import { CatalogoService } from '../catalogo/catalogo.service';
import { BloquearService } from '../bloquear/bloquear.service';

@Injectable()
export class PersonaService {
  constructor(private readonly bloquearService: BloquearService, 
    private readonly preferenciasService: PreferenciasService, 
    private readonly catalogoService: CatalogoService){}
  
  static Personas: Persona[] = [];

  create(createPersonaDto: CreatePersonaDto) {
    const newPersona = new Persona()
    const preferidos = this.preferenciasService.map(createPersonaDto.alias)
    const bloqueos = this.bloquearService.map(createPersonaDto.alias)
    
    let wachin = this.findOne(Persona.alias == createPersonaDto.personapc)
    newPersona.alias = createPersonaDto.alias
    newPersona.nombre = createPersonaDto.nombre
    newPersona.apellido = createPersonaDto.apellido
    newPersona.email = createPersonaDto.email
    newPersona.estado = createPersonaDto.estado
    newPersona.pais = createPersonaDto.pais
    newPersona.personasBloqueadas.push(bloqueos)
    newPersona.conversaciones.push(wachin)
    newPersona.preferencias.push(preferidos)
    PersonaService.Personas.push(newPersona)
  }

  findAll() {
    return PersonaService.Personas
  }

  findOne(alias: string) {
    const persona = PersonaService.Personas.find(p => p.alias == alias)
      if(!persona){

      }
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const persona = PersonaService.Personas.find(c => c.alias == alias)
    if(!persona){
      throw new NotFoundException
    }
    return persona
  }

  remove(id: number) {
    PersonaService.Personas = PersonaService.Personas.filter(c => c.alias !== alias);
  }
}
