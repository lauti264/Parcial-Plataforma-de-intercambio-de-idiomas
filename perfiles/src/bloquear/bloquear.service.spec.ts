import { Test, TestingModule } from '@nestjs/testing';
import { BloquearService } from './bloquear.service';

describe('BloquearService', () => {
  let service: BloquearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloquearService],
    }).compile();

    service = module.get<BloquearService>(BloquearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
