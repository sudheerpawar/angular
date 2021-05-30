import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sqrtpipe'
})
export class SqrtpipePipe implements PipeTransform {
  
  transform(value: number): number {
    return Math.sqrt(value);
  }
}