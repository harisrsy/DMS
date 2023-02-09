import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IssuenceService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: Prisma.issuenceCreateInput) {
    return await this.prisma.issuence.create({
      data,
    });
  }

  findAll() {
    return this.prisma.issuence.findMany({
      include: {
        ap: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.issuence.findUnique({
      where: {
        id: +id,
      },
    });
  }

  update(
    id: number,
    data: Prisma.issuenceUpdateInput,
  ) {
    return this.prisma.issuence.update({
      where: {
        id: +id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.issuence.delete({
      where: {
        id: +id,
      },
    });
  }

  async assignIssue(
    followId: number,
    apId: number,
  ) {
    return await this.prisma.issuence.update({
      where: {
        id: +followId,
      },
      data: {
        ap: {
          connect: {
            id: +apId,
          },
        },
      },
    });
  }
}
