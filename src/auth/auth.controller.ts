import { Body, Controller, Get, Patch, Post, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { inDto } from './dto/in.dto';
import { ChangePasswordDto } from './dto/pass.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  async signin(@Request() req, @Response() res, @Body() dto: inDto) {
    return this.authService.signin(dto, req, res);
  }

  @Post('change-password')
  async changePassword(@Body() dto: ChangePasswordDto) {
    return this.authService.changePassword(dto);
  }

  @Get('signout')
  signout(@Request() req, @Response() res) {
    return this.authService.signout(req, res);
  }
}
