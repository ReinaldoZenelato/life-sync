import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthResponseDto } from '../dto/auth-response.dto';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { ApiDefaultErrorResponses } from '../../common/swagger/swagger-error-responses.decorator';

@ApiTags('Auth')
@ApiDefaultErrorResponses()
export abstract class AuthControllerDoc {
  @ApiOperation({ summary: 'Cadastrar novo usuário' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'Usuário cadastrado com sucesso', type: AuthResponseDto })
  register(_: RegisterDto): Promise<AuthResponseDto> {
    throw new Error('Method not implemented.');
  }

  @ApiOperation({ summary: 'Autenticar usuário' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Usuário autenticado com sucesso', type: AuthResponseDto })
  login(_: LoginDto): Promise<AuthResponseDto> {
    throw new Error('Method not implemented.');
  }
}
