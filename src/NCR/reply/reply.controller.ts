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
import { ReplyService } from './reply.service';
import { FilereplyDto } from './reply.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';


@Controller('reply')
export class ReplyController {
  constructor(
    private readonly replyService: ReplyService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllReply() {
    return this.replyService.findAll();
  }

  @Get(':id')
  async getReply(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const reply = await this.replyService.findOne(
      +id,
    );
    if (!reply) {
      throw new NotFoundException(
        'REPLY RECORD NOT FOUND',
      );
    }
    return this.replyService.findOne(+id);
  }

  @Post()
  async addReply(
    @Body()
    body: FilereplyDto,
  ) {
    return await this.replyService.create(body);
  }

  @Delete(':id')
  async removeReply(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const reply = await this.replyService.findOne(
      +id,
    );
    if (!reply) {
      throw new NotFoundException(
        'REPLY RECORD NOT FOUND',
      );
    }
    return await this.replyService.remove(+id);
  }

  @Patch(':id')
  async updateReply(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: FilereplyDto,
  ) {
    const reply = await this.replyService.findOne(
      +id,
    );
    if (!reply) {
      throw new NotFoundException(
        'REPLY RECORD NOT FOUND',
      );
    }
    return await this.replyService.update(
      +id,
      body,
    );
  }
}
