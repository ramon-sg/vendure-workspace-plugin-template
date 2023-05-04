import { Test, TestingModule } from '@nestjs/testing';
import { PluginController } from './plugin.controller';
import { PluginService } from './plugin.service';

describe('PluginController', () => {
    let pluginController: PluginController;
    let pluginService: PluginService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [PluginController],
            providers: [PluginService],
        }).compile();

        pluginController = app.get<PluginController>(PluginController);
        pluginService = app.get<PluginService>(PluginService);
    });

    describe('PluginController', () => {
        it('should return status: success', () => {
            const result = { status: 'success' };
            jest.spyOn(pluginService, 'getStatus').mockImplementation(() => result);

            expect(pluginController.getStatus()).toEqual(result);
        });
    });
});
