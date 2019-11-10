import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'annualsalary'
})
export class AnnualsalaryPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    let annualPackage = value *12;
    console.log(annualPackage,"annaul");
    return annualPackage;
  }

}
