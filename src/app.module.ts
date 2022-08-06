import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ExistValidator } from './etc/validator/exist-validator';
import { UniqueValidator } from './etc/validator/unique-validator';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { ProdukModule } from './produk/produk.module';
import { Produk } from './produk/entities/produk.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : process.env.MYSQL_HOST,
      port : parseInt(process.env.MYSQL_PORT),
      username : process.env.MYSQL_USER,
      database : process.env.MYSQL_DB,
      entities : [
        Users,
        Produk
      ],
      synchronize : true

    }),
    UserModule,
    AuthModule,
    ProdukModule
  ],
  controllers: [AppController],
  providers: [AppService, ExistValidator, UniqueValidator],
  exports: [UserService]
})
export class AppModule{}  