import { IsNotEmpty, IsString, IsEmail, Length, IsIn, IsNumber } from 'class-validator';


export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  public password: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['admin','user'], { message: 'You have to choose your role' })
  public role: string;

  @IsNotEmpty()
  @IsNumber()
  public idNumber: number;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public unit: string;
}
