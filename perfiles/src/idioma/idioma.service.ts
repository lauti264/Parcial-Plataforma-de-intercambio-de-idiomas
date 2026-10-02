import { Injectable } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomaService {
  private static idiomas: Idioma[] = [{nombre:"teutonico", codigo:"3"}, 
    {nombre:"mandarin", codigo: "2"}, 
    {nombre: "aleman", codigo: "1"}
  ];
  
  create(createIdiomaDto: CreateIdiomaDto) {
  }

  findAll() {
    return IdiomaService.idiomas;
  }

  findOne(id: number) {
    return `This action returns a #${id} idioma`;
  }

  update(id: number, updateIdiomaDto: UpdateIdiomaDto) {
    return `This action updates a #${id} idioma`;
  }

  remove(id: number) {
    return `This action removes a #${id} idioma`;
  }
}
