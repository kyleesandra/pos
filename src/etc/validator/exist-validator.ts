import { ArgumentsHost, Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { getConnection } from 'typeorm';
@ValidatorConstraint({async:true})

@Injectable()
export class ExistValidator  implements ValidatorConstraintInterface {
    async validate(value:any, args:ValidationArguments){
    let find = {[args.constraints[1]]:args.value}
    let cek = await getConnection().getRepository(args.constraints[0]).findOne(find)
    if(cek) return true
    return false 
    }
    defaultMessage(args: ValidationArguments){
         return args.property+ ' '+ args.value + 'tidak ditemukan ' 
    }
    }

    export function  IsExist(option:any,ValidationOption?:ValidationOptions){
        return function(object:any,PropertyName:string){
             registerDecorator({
                name: 'IsExist',
                target: object.constructor,
                propertyName: PropertyName,
                constraints: option,
                options:ValidationOption,
                validator: ExistValidator,
                async: true
             })
        }
    }
