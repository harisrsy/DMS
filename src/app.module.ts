import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { NcrModule } from 'src/NCR/init/ncr.module';
import { ReplyModule } from 'src/NCR/reply/reply.module';
import { FollowModule } from 'src/NCR/follow/follow.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { ApModule } from 'src/audit-plan/ap/ap.module';
import { DetailModule } from './audit-plan/detail/detail.module';
import { IssuenceModule } from './audit-plan/issuence/issuence.module';

@Module({
  imports: [PrismaModule, NcrModule, ReplyModule, FollowModule, AuthModule, UsersModule, RolesGuard, ApModule, DetailModule, IssuenceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
