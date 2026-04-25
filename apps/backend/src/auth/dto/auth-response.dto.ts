import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken!: string;

  @ApiProperty({ example: 'RZ Developer' })
  name!: string;

  @ApiProperty({ example: 'rz@example.com' })
  email!: string;
}
