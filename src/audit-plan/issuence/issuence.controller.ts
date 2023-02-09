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
import { FileIssuenceDto } from './issuence.dto';
import { IssuenceService } from './issuence.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';


@UseGuards(JwtAuthGuard)
@Controller('issuence')
export class IssuenceController {
  constructor(
    private readonly IssuenceService: IssuenceService,
  ) {}
  
@UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.IssuenceService.findAll();
  }

  @Get(':id')
  async getIssue(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const issue =
      await this.IssuenceService.findOne(+id);
    if (!issue) {
      throw new NotFoundException(
        'ISSUENCE RECORD NOT FOUND',
      );
    }
    return this.IssuenceService.findOne(+id);
  }

  @Post()
  async addIssue(
    @Body()
    body: FileIssuenceDto,
  ) {
    return await this.IssuenceService.create(body);
  }

  @Patch(':id')
  async updateFollow(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: FileIssuenceDto,
  ) {
    const issue =
      await this.IssuenceService.findOne(+id);
    if (!issue) {
      throw new NotFoundException(
        'ISSUE RECORD NOT FOUND',
      );
    }
    return await this.IssuenceService.update(
      +id,
      body,
    );
  }

  @Delete(':id')
  async removeIssue(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const issue =
      await this.IssuenceService.findOne(+id);
    if (!issue) {
      throw new NotFoundException(
        'ISSUENCE RECORD NOT FOUND',
      );
    }
    return this.IssuenceService.remove(+id);
  }

  @Patch('update/assign-issue')
  async assignIssue(
    @Body()
    body: {
      issueNbr: number;
      apId: number;
    },
  ) {
    return await this.IssuenceService.assignIssue(
      body.issueNbr,
      body.apId,
    );
  }
}
