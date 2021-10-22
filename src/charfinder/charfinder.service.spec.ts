import { Test, TestingModule } from '@nestjs/testing';
import { CharfinderService } from './charfinder.service';

describe('CharfinderService', () => {
  let service: CharfinderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharfinderService],
    }).compile();

    service = module.get<CharfinderService>(CharfinderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
