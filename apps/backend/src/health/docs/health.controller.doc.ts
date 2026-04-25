import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

class HealthStatusDto {
  status!: string;
  service!: string;
}

@ApiTags('Health')
export abstract class HealthControllerDoc {
  @ApiOperation({ summary: 'Verificar saúde básica da API' })
  @ApiOkResponse({ type: HealthStatusDto })
  getStatus(): HealthStatusDto {
    throw new Error('Method not implemented.');
  }
}
