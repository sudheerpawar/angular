import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(employee:any[],column:string): any[] {
    let sortedEmp=employee.sort((a,b)=>{
      if(a[column]>b[column]){
        return 1;
      }
      if(a[column]<b[column]){
        return -1;
      }
      return 0;
    });
    return sortedEmp;
  }

}

