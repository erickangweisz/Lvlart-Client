import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  // pending development
  transform(value: any, args?: any): any {
    let score = value
    switch (true) {
      case (score >= 0 && score <= 50):
        return 1
      case (score > 50 && score <= 200):
        return 20
      case (score > 200 && score <= 500):
        return 3
      default:
        return 100
    }
  }

}
