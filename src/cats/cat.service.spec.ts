/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { CatService } from "./cat.service";

describe("StudentService", () => {
  let service: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatService],
    }).compile();

    service = module.get<CatService>(CatService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
