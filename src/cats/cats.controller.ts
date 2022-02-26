import { CreateCatDto } from './dto/create-cat.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { ValidationPipe } from 'src/validation.pipe';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Post()
  @UseFilters(HttpExceptionFilter)
  @Roles('admin')
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return this.catsService.create(createCatDto);
  }
}
