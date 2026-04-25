import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorDetailDto } from '../dto/error-detail.dto';
import { ErrorResponseDto } from '../dto/error-response.dto';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const payload =
      exception instanceof HttpException ? exception.getResponse() : null;

    const errorResponse: ErrorResponseDto = {
      timestamp: new Date().toISOString(),
      path: request.url,
      message: this.resolveMessage(payload, exception),
      errors: this.resolveErrors(payload),
    };

    response.status(status).json(errorResponse);
  }

  private resolveMessage(payload: unknown, exception: unknown): string {
    if (typeof payload === 'string') {
      return payload;
    }

    if (this.isRecord(payload) && typeof payload.message === 'string') {
      return payload.message;
    }

    if (exception instanceof Error) {
      return exception.message;
    }

    return 'Unexpected error';
  }

  private resolveErrors(payload: unknown): ErrorDetailDto[] {
    if (!this.isRecord(payload)) {
      return [];
    }

    const messages = Array.isArray(payload.message) ? payload.message : [];

    return messages.map((message, index) => ({
      field: `field_${index + 1}`,
      reason: String(message),
    }));
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
  }
}
