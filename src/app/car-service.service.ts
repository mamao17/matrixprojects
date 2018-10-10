import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Car} from './car';



@Injectable()
export class CarService {

  constructor(private http: HttpClient) {

    this.getCarsSmall().subscribe(data => {
      console.log(data);
 });
   }

  getCarsSmall() : Observable<any> {
    return this.http.get("assets/sdata/cars-small.json");
  }

  
}