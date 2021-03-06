import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employeeinterface'
// import {EmployeeData} from '../employeedata'
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //  data : Employee [] = EmployeeData;
  data :  Employee []
  name :string = "mayank";
  age : number =24;
  technology :  string ="angular";
  company :string = 'appinventriv';

  showDetail = false;

  employeeCountRadioButtonValue = 'All';
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.data = this._employeeService.getEmployee();
  console.log(this.data ,"data by service")
  }
  togggleDetail(){
    this.showDetail = !this.showDetail;
  }

  employeeCountShow(selectedValue){
    console.log(selectedValue,"selected value");
    this.employeeCountRadioButtonValue = selectedValue;
  }



  getAllEmployee(){
    return this.data.length;
  }
  getAllMaleEmployee(){
    return this.data.filter(e=>e.gender.toLowerCase()==="male").length;
  }
  getAllFemaleEmployee(){
    return this.data.filter(e=>e.gender.toLowerCase()==="female").length;
  }
}
