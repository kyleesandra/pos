import { OmitType, PickType } from "@nestjs/swagger"
import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { userInfo } from "os"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
import { Users } from "../entities/user.entity"

export class UserDto { 
   @ApiProperty({required:true})
   @IsOptional()
   @IsExist([Users,'id'])
    id? : number

   @ApiProperty({required:true})
   @IsString()
    @MaxLength(200 )
    nama_user : string
    
    @ApiProperty({required:true})
    @IsEmail()
    @IsUnique([Users,'email']) 
    email : string                                                                           
    
    @ApiProperty({required:true})
    @IsString()
    @MinLength(6)
    @MaxLength(50) 
    @IsUnique ([Users,'username']) 
    username : string

    @ApiProperty({required:true})
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password : string }
    
    
   export class createUserDto extends OmitType(UserDto,['id']){}
   export class UserIdDto extends PickType(UserDto,['id']){}