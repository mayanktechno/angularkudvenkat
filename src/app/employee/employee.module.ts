import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';
import { AnnualsalaryPipe } from '../pipe/annualsalary.pipe';
import { NametitlePipe } from '../pipe/nametitle.pipe';
import { EmployeecountModule } from '../employeecount/employeecount.module';




@NgModule({
  declarations: [EmployeeComponent ,AnnualsalaryPipe,NametitlePipe],
  imports: [
    CommonModule,
    FormsModule,
    EmployeecountModule
  ],
  exports : [EmployeeComponent]
})
export class EmployeeModule { }
