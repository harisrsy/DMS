import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsIn,  } from 'class-validator';




export class inDto {
  @IsNotEmpty()
  @IsNumber()
  public idNumber: number;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  public password: string;
}
