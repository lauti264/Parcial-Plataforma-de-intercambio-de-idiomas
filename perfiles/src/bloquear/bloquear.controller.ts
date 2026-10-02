import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BloquearService } from './bloquear.service';
import { CreateBloquearDto } from './dto/create-bloquear.dto';
import { UpdateBloquearDto } from './dto/update-bloquear.dto';

@Controller('bloquear')
export class BloquearController {
  constructor(private readonly bloquearService: BloquearService) {}

  @Post()
  create(@Body() createBloquearDto: CreateBloquearDto) {
    return this.bloquearService.create(createBloquearDto);
  }

  @Get()
  findAll() {
    return this.bloquearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloquearService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloquearDto: UpdateBloquearDto) {
    return this.bloquearService.update(+id, updateBloquearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloquearService.remove(+id);
  }
}
