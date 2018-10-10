import { Component, OnInit } from '@angular/core';
import{CarService} from '../car-service.service';
import{Car} from '../car';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html'
  
})
export class TableDemoComponent implements OnInit {

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().subscribe(cars => this.cars = cars);

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }
  }


