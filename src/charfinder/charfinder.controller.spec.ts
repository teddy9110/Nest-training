import { Test, TestingModule } from '@nestjs/testing';
import { CharfinderController } from './charfinder.controller';
import { CharfinderService } from './charfinder.service';

describe('CharfinderController', () => {
  let controller: CharfinderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharfinderController],
      providers: [CharfinderService],
    }).compile();

    controller = module.get<CharfinderController>(CharfinderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
