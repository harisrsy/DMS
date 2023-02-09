import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
import { ApService } from './ap.service';
import { FileApDto } from './ap.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('auditplan')
export class ApController {
  constructor(
    private readonly apService: ApService,
  ) {}
  
@UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.apService.findAll();
  }

  @Get(':id')
  async getAp(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const Ap =
      await this.apService.findOne(+id);
    if (!Ap) {
      throw new NotFoundException(
        'AUDIT PLAN RECORD NOT FOUND',
      );
    }
    return this.apService.findOne(+id);
  }

  @Post()
  async addAp(
    @Body()
    body: FileApDto,
  ) {
    return await this.apService.create(body);
  }

  @Patch(':id')
  async updateAp(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body:FileApDto,
  ) {
    const ap =
      await this.apService.findOne(+id);
    if (!ap) {
      throw new NotFoundException(
        'AUDIT PLAN RECORD NOT FOUND',
      );
    }
    return await this.apService.update(
      +id,
      body,
    );
  }

  @Delete(':id')
  async removefollow(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const follow =
      await this.apService.findOne(+id);
    if (!follow) {
      throw new NotFoundException(
        'FOLLOW RECORD NOT FOUND',
      );
    }
    return this.apService.remove(+id);
  }

}
