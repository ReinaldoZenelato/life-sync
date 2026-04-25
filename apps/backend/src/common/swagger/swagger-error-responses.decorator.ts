import { applyDecorators, Type } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../dto/error-response.dto';

export function ApiDefaultErrorResponses(): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiBadRequestResponse({
      description: 'Validation or request error',
      type: ErrorResponseDto as Type<unknown>,
    }),
    ApiInternalServerErrorResponse({
      description: 'Unexpected server error',
      type: ErrorResponseDto as Type<unknown>,
    }),
  );
}
