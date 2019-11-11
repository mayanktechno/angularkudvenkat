import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeecountComponent } from './employeecount.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [ EmployeecountComponent],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[EmployeecountComponent]
})
export class EmployeecountModule { }
