import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: Prisma.apCreateInput) {
    return await this.prisma.ap.create({
      data,
    });
  }

  findAll() {
    return this.prisma.ap.findMany({
      include: {
        detail: true,
        issuence: true
      },
    });
  }

  findOne(id: number) {
    return this.prisma.ap.findUnique({
      where: {
        id: +id,
      },
    });
  }

  update(
    id: number,
    data: Prisma.apUpdateInput,
  ) {
    return this.prisma.ap.update({
      where: {
        id: +id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.ap.delete({
      where: {
        id: +id,
      },
    });
  }
}
