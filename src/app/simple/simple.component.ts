import { Component, OnInit, Input , OnChanges , SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit ,OnChanges{

  @Input() simpleInput ;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes :  SimpleChanges){

   // console.log(changes);

    for(let propertyName in changes){
      let property = changes[propertyName];
      //console.log(property,"property");
      let currentValue = JSON.stringify(property.currentValue);
      let previousValue = JSON.stringify(property.previousValue);

      console.log("propertyName :" + property + "currentValue :"+ currentValue+"previousValue : "+ previousValue);
    }
  }

  
}
