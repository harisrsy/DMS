import { IsString, MinLength, MaxLength, Length, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty()
  @IsNumber()
  public idNumber: number;

  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  currentPassword: string;

  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  newPassword: string;
}
