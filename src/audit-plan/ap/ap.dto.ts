import { IsDateString, IsIn, IsNotEmpty } from "class-validator";

export class FileApDto{
    @IsNotEmpty()@IsIn(['DGCA','EASA'])
    regbes: string
    @IsNotEmpty()
    docno: string;
    @IsNotEmpty()@IsDateString()
    docdate: string;
    @IsNotEmpty()
    subject: string;
    @IsNotEmpty()@IsIn(['Procedure Audit','Product Audit'])
    audit_type: string;

}