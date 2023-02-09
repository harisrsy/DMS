import { Module } from '@nestjs/common';
import { IssuenceService} from './issuence.service';
import { IssuenceController } from './issuence.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [IssuenceService],
  controllers: [IssuenceController],
})
export class IssuenceModule {}
