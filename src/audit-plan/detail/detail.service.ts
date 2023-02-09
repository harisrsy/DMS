import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FiledetailDto } from './detail.dto';

@Injectable()
export class DetailService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: Prisma.detailCreateInput) {
    return await this.prisma.detail.create({
      data,
    });
  }

  findAll() {
    return this.prisma.detail.findMany({
    });
  }

  findOne(id: number) {
    return this.prisma.detail.findUnique({
      where: {
        id: +id,
      },
    });
  }

  update(
    id: number,
    data: Prisma.detailUpdateInput,
  ) {
    return this.prisma.detail.update({
      where: {
        id: +id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.detail.delete({
      where: {
        id: +id,
      },
    });
  }
}
