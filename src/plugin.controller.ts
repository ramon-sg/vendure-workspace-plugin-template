import { Controller, Get } from '@nestjs/common';
import { PluginService } from './plugin.service';

@Controller()
export class PluginController {
    constructor(private pluginService: PluginService) {}

    @Get('plugin/status')
    getStatus() {
        return this.pluginService.getStatus();
    }
}
