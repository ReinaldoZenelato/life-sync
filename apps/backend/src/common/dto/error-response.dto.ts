import { ApiProperty } from '@nestjs/swagger';
import { ErrorDetailDto } from './error-detail.dto';

export class ErrorResponseDto {
  @ApiProperty({ example: '2026-04-25T21:00:00.000Z' })
  timestamp!: string;

  @ApiProperty({ example: '/auth/login' })
  path!: string;

  @ApiProperty({ example: 'Validation failed' })
  message!: string;

  @ApiProperty({ type: [ErrorDetailDto] })
  errors!: ErrorDetailDto[];
}
