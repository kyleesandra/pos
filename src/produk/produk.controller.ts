import { Controller } from '@nestjs/common';
import { ProdukService } from './produk.service';

@Controller('produk')
export class ProdukController {
  constructor(private readonly produkService: ProdukService) {}
}
