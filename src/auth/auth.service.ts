import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';
import { Request, Response } from 'express';
import { inDto } from './dto/in.dto';
import { ChangePasswordDto } from './dto/pass.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(dto: AuthDto) {
    const { email, password, role, idNumber, name, unit } = dto;

    const userExists = await this.prisma.user.findUnique({
      where: { idNumber },
    });

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await this.hashPassword(password);

    
    await this.prisma.user.create({
      data: {
        email,
        hashedPassword,
        role,
        idNumber,
        name,
        unit,
      },
    });

    return { message: 'User created succefully' };
  }

 
  async changePassword(dto: ChangePasswordDto) {
    const { idNumber, currentPassword, newPassword } = dto;
  
    const foundUser = await this.prisma.user.findUnique({
      where: { idNumber },
    });
  
    if (!foundUser) {
      throw new BadRequestException('User not found');
    }
  
    const compareSuccess = await this.comparePasswords({
      password: currentPassword,
      hash: foundUser.hashedPassword,
    });
  
    if (!compareSuccess) {
      throw new BadRequestException('Wrong current password');
    }
  
    const hashedPassword = await this.hashPassword(newPassword);
  
    await this.prisma.user.update({
      where: { idNumber },
      data: {
        hashedPassword,
      },
    });
  
    return { message: 'Password changed successfully' };
  }
  

  async signin(dto: inDto, req: Request, res: Response) {
    const { idNumber, password, } = dto;

    const foundUser = await this.prisma.user.findUnique({
      where: {
        idNumber,
      },
    });

    if (!foundUser) {
      throw new BadRequestException('Wrong credentials');
    }

    const compareSuccess = await this.comparePasswords({
      password,
      hash: foundUser.hashedPassword,
    });

    if (!compareSuccess) {
      throw new BadRequestException('Wrong credentials');
    }

    const token = await this.signToken({
      userId: foundUser.id,
      idNumber: foundUser.idNumber,
      role: foundUser.role,
    });

    if (!token) {
      throw new ForbiddenException('Could not signin');
    }

    res.cookie('token', token, {});

    return res.send({ message: 'Logged in succefully' });
  }

  async signout(req: Request, res: Response) {
    res.clearCookie('token');

    return res.send({ message: 'Logged out succefully' });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePasswords(args: { hash: string; password: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }

  async signToken(args: { userId: string; idNumber: number; role: string }) {
    const payload = {
      id: args.userId,
      idNumber: args.idNumber,
      role: args.role
    };

    const token = await this.jwt.signAsync(payload, {
      secret: jwtSecret,
    });

    return token;
  }
}
