import {
  IsDateString,
  IsNotEmpty,
  IsNumber,

} from 'class-validator';


export class FileIssuenceDto {

  @IsNotEmpty()
  @IsNumber()
  apId :number;

  @IsNotEmpty() 
  @IsNumber()
  issueNbr :number;

  @IsNotEmpty()
  @IsDateString()
  issueDate :string;

  @IsNotEmpty()
  issueDesc :string;

  @IsNotEmpty()
  issuedBy :string;

  @IsNotEmpty()
  hdoApprove :string;

}