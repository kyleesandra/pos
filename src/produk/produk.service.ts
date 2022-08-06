import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produk } from './entities/produk.entity';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';



@Injectable()
export class ProdukService {
    constructor(
        @InjectRepository(Produk) private produkRepo : Repository<Produk>
    ){}
    super()

    create(createProdukDto: CreateProdukDto) {
        return this.produkRepo.save(createProdukDto);
    }
    findAll(filter) {
        return this.generatePage(filter,this.produkRepo,{relations:['user']})
        //return this.produkRepo.find({relations:['user']});
      }
    generatePage(filter: any, produkRepo: Repository<Produk>, arg2: { relations: string[]; }) {
        throw new Error('Method not implemented.');
    }
    
      findOne(id: number) {
        return this.produkRepo.findOne(id);
      }
      update(id: number, updateProdukDto: UpdateProdukDto) {
        updateProdukDto.id = id
        return this.produkRepo.save(updateProdukDto);
      }
      async remove(id: number) {
        let produk = await this.produkRepo.findOne(id)
        return this.produkRepo.remove(produk);
      }
}