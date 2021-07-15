import { Injectable } from '@nestjs/common';

@Injectable()
export class PluginService {
  getStatus(): { status: string } {
    return {
      status: 'ok',
    };
  }
}
