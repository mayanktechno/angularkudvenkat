import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nametitle'
})
export class NametitlePipe implements PipeTransform {

  transform(value: any, gender ): any {
    console.log(value, "value" , gender ,"gender");
    if(gender.toLowerCase() == "male"){
      return "Mr. " +value;
    }
    else{
      return "Miss. " +value;
    }
  }

}
