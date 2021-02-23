import { Controller, Post, Body } from '@nestjs/common';
import { CiphersService } from './ciphers.service';


@Controller('ciphers')
export class CiphersController {
  constructor(private readonly ciphersService: CiphersService) {}

  @Post()
  addCipher(
    @Body('phrase') ciphPhrase: string,
    @Body('offset') ciphOffset: number
  ) {
    const res = this.ciphersService.addCipher(ciphPhrase, ciphOffset)
    return { encoded: res }
  }
}
