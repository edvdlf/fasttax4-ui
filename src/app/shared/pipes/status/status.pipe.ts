import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    if(value!== null){
      switch(value){
        case  'true':
          value = 'Sim'
        break
        case  'false':
          value = 'Não'
        break
      }
      return value;
    }
    return "";
  }

}
