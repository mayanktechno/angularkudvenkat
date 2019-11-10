import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeecountComponent } from './employeecount.component';





@NgModule({
  declarations: [ EmployeecountComponent],
  imports: [
    CommonModule
  ],exports:[EmployeecountComponent]
})
export class EmployeecountModule { }
