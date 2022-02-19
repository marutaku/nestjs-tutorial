import { CreateCatDto } from './create-cat.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('ab*cd')
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
}
