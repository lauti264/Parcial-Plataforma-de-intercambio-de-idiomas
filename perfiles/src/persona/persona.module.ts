import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { CatalogoModule } from '../catalogo/catalogo.module';
import { CatalogoService } from '../catalogo/catalogo.service';
import { BloquearService } from '../bloquear/bloquear.service';
import { PreferenciasService } from '../preferencias/preferencias.service';

@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
  imports: [CatalogoService,BloquearService,PreferenciasService]
})
export class PersonaModule {}
