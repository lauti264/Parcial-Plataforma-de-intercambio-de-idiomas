import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { IdiomaModule } from './idioma/idioma.module';
import { PreferenciasModule } from './preferencias/preferencias.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { BloquearModule } from './bloquear/bloquear.module';

@Module({
  imports: [PersonaModule, IdiomaModule, PreferenciasModule, CatalogoModule, BloquearModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
