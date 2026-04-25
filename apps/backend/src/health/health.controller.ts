import { Controller, Get } from '@nestjs/common';
import { HealthControllerDoc } from './docs/health.controller.doc';

@Controller()
export class HealthController extends HealthControllerDoc {
  @Get('health')
  override getStatus() {
    return {
      status: 'ok',
      service: 'lifesync-api',
    };
  }
}
