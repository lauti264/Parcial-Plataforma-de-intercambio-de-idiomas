import { Module } from '@nestjs/common';
import { BloquearService } from './bloquear.service';
import { BloquearController } from './bloquear.controller';

@Module({
  controllers: [BloquearController],
  providers: [BloquearService],
})
export class BloquearModule {}
