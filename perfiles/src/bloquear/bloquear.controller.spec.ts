import { Test, TestingModule } from '@nestjs/testing';
import { BloquearController } from './bloquear.controller';
import { BloquearService } from './bloquear.service';

describe('BloquearController', () => {
  let controller: BloquearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloquearController],
      providers: [BloquearService],
    }).compile();

    controller = module.get<BloquearController>(BloquearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
