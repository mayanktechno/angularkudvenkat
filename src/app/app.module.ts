import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';

import { SimpleComponent } from './simple/simple.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
 
    SimpleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
