import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { DetailService } from './detail.service';
import { FiledetailDto } from './detail.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';


@Controller('detail')
export class DetailController {
  constructor(
    private readonly detailService: DetailService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllDetail() {
    return this.detailService.findAll();
  }

  @Get(':id')
  async getDetail(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const detail = await this.detailService.findOne(
      +id,
    );
    if (!detail) {
      throw new NotFoundException(
        'REPLY RECORD NOT FOUND',
      );
    }
    return this.detailService.findOne(+id);
  }

  @Post()
  async addDetail(
    @Body()
    body: FiledetailDto,
  ) {
    return await this.detailService.create(body);
  }

  @Delete(':id')
  async removeDetail(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const detail = await this.detailService.findOne(
      +id,
    );
    if (!detail) {
      throw new NotFoundException(
        'REPLY RECORD NOT FOUND',
      );
    }
    return await this.detailService.remove(+id);
  }

  @Patch(':id')
  async updateDetail(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: FiledetailDto,
  ) {
    const detail = await this.detailService.findOne(
      +id,
    );
    if (!detail) {
      throw new NotFoundException(
        'REPLY RECORD NOT FOUND',
      );
    }
    return await this.detailService.update(
      +id,
      body,
    );
  }
}
