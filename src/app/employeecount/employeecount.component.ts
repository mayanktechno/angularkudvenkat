import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent implements OnInit {

  radioButtonValue = 'All';
  @Input() all :number;
  @Input() male : number; 
  @Input() female :number;


  @Output() onRadioButtonChanged : EventEmitter<String> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onRadioButtonChange(){
    this.onRadioButtonChanged.emit(this.radioButtonValue);
    console.log(this.radioButtonValue, "radio button value");
  }

}
