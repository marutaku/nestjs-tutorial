import { HttpException, HttpStatus } from '@nestjs/common';

export class ForBiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
