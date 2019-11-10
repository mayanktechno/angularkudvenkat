import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employeeinterface'
import {EmployeeData} from '../employeedata'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  data = EmployeeData;
  name :string = "mayank";
  age : number =24;
  technology :  string ="angular";
  company :string = 'appinventriv';

  showDetail = false;
  constructor() { }

  ngOnInit() {
  }
  togggleDetail(){
    this.showDetail = !this.showDetail;
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
