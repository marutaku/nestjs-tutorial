import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// @Injectable({ scope: Scope.REQUEST })
// 普段は依存性の注入はアプリが立ち上がった時点で行われるが，
// 上記のデコレータで，依存性の注入がリクエストごとに行われるようになる
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
