import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { PluginController } from './plugin.controller';
import { PluginService } from './plugin.service';

/**
 * An example Vendure plugin.
 *
 * @example
 * ```TypeScript
 * export const config: VendureConfig = {
 *   //...
 *   plugins: [
 *    VendureInternalPlugin
 *   ]
 * }
 * ```
 */
@VendurePlugin({
  controllers: [PluginController],
  imports: [PluginCommonModule],
  entities: [],
  providers: [PluginService],
  shopApiExtensions: {
    // schema: ,
    resolvers: [],
  },
})
export class VendureInternalPlugin {}
