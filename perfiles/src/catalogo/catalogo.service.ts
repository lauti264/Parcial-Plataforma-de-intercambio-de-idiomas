import { Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { PersonaService } from '../persona/persona.service';
import { IdiomaService } from '../idioma/idioma.service';
import { Catalogo } from './entities/catalogo.entity';
import { NotFoundException } from '@nestjs/common';
@Injectable()

export class CatalogoService {
  constructor(private readonly personaService: PersonaService, idiomaService: IdiomaService){}
  static Catalogo: Catalogo[] = []
  create(createCatalogoDto: CreateCatalogoDto) {
   const newCatalogo: Catalogo = new Catalogo();
   const catalogoAsignado = this.personaService.findOne(createCatalogoDto.alias);
   newCatalogo.id = Math.random()
   newCatalogo.nivelAprendido = createCatalogoDto.nivelAprendido
   newCatalogo.nivelHablado = createCatalogoDto.nivelHablado
   newCatalogo.idiomaA = createCatalogoDto.idiomaA
   newCatalogo.alias = // aca va catalogoAsignado 
   CatalogoService.Catalogo.push(newCatalogo)
  }

  findAll() {
    return CatalogoService.Catalogo
  }

  findOne(id: number) {
    const catalogo = CatalogoService.Catalogo.find(c =>c.id == id)
    if(!catalogo){

    }
  }

  update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    const catalogo = CatalogoService.Catalogo.find(c => c.id == id)
        if(!id){
          throw new NotFoundException
        }
        return catalogo
  }

  remove(id: number) {
    CatalogoService.Catalogo = CatalogoService.Catalogo.filter(c => c.id !== id);
  }
}
