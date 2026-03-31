import {Test,TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
describe('HelloController', () => {
  let helloController: HelloController; 
  beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile();
    helloController = module.get<HelloController>(HelloController);
  });
  it('should be defined', () => {   
    expect(helloController).toBeDefined();
  });
  it('should return "Hello World!"', () => {
    const result = helloController.hello();
    expect(result).toBe("Hello World!");
  });

});
