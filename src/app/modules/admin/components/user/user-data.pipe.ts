import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userData'
})
export class UserDataPipe implements PipeTransform {
  transform(value: string, regexValue: string, replaceValue: any): any {
    let regex = new RegExp(regexValue, 'g');
    return value.replace(regex, replaceValue);
    
  }
  // export class nl2brPipe implements PipeTransform {

     

  //   transform(value: string): string {
  
  //       return value.replace(/\n/g, '<br/>');
  
  //  }
  
       
  
  }

 

