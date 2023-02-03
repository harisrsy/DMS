import { Module } from '@nestjs/common';
import { NcrService } from './ncr.service';
import { NcrController } from './ncr.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [PrismaModule],
  providers: [NcrService, JwtStrategy],
  controllers: [NcrController]
})
export class NcrModule {}
