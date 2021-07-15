import { Test, TestingModule } from '@nestjs/testing';
import { PluginService } from './plugin.service';

describe('PluginService', () => {
  let pluginService: PluginService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PluginService],
    }).compile();

    pluginService = app.get<PluginService>(PluginService);
  });

  describe('PluginService', () => {
    it('should return status: ok', () => {
      expect(pluginService.getStatus()).toEqual({ status: 'ok' });
    });
  });
});
