import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarService } from './car-service.service';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http'; 
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
    

@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent
  ],
  imports: [
    BrowserModule, TableModule, HttpClientModule, AccordionModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
