import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class FiledetailDto {
  @IsNotEmpty()
  apId           :number;
  
  @IsNumber()
  @IsNotEmpty()
  no              :number;
  
  @IsNotEmpty()
  requirement     :string;

  @IsString()
  description     :string;

  @IsString()
  sub_description :string;
  
  @IsNotEmpty()
  work_station    :string;

  @IsString()
  planned_week    :string;

  @IsString()
  visit_date      :string;

  @IsString()
  audit_evidence  :string;
}
