import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string, args:string): string {
    if(value!== null){


      return value;
    }
    return "";
  }

}

export class ShortenPipe implements PipeTransform {

  transform(value: string, args: number): string {
    if(value!== null){
      return value.length> args ? value.substring(0, args)+ '...': value;
    }
    return '';
  }

}
