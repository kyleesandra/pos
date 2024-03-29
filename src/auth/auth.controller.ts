import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { JwtGuard } from './jwt.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
     
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  cekUser(@Request()req){
    return req.user
  }

  @Post()
  async login(@Body() authDto : AuthDto){
     let user = await this.authService.cekUser(authDto.username,authDto.password)
    return this.authService.generateToken({id:user.id})}
  }
  

