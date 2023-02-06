import { IsString, MinLength, MaxLength, Length, IsEmail } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  currentPassword: string;

  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  newPassword: string;
}
