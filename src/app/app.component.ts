import { Component, OnInit } from '@angular/core';
import { StocksService } from './stocks.service';
import { Stock } from './stock.model';
import { QueryBuilderConfig } from 'ngx-angular-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'milionstonks';

  query = {
    condition: 'and',
    rules: [
      {field: 'name', operator: '=', value: 'bob'}
      // {field: 'active', operator: '=', value: true}
    ]
  };
  
  config: QueryBuilderConfig = {
    fields: {
      name: {name: 'name', type: 'string'},
      class: {name: 'class', type: 'number'},
      country: {name: 'country', type: 'string'},
      type: {name: 'type', type: 'string'},
      code: {name: 'code', type: 'string'},
      sector: {name: 'sector', type: 'string'},
      active: {name: 'active', type: 'string'},
      // gender: {
      //   name: 'Gender',
      //   type: 'category',
      //   options: [
      //     {name: 'Male', value: 'm'},
      //     {name: 'Female', value: 'f'}
      //   ]
      // }
    }
  }

  // displayedColumns = ['name', 'class', 'country', 'type', 'code', 'sector', 'active', 'details',  'update', 'delete'];
  displayedColumns = ['name', 'class', 'country', 'type',  'code', 'sector', 'active'];

  stocks: Stock[] = [];
  constructor(private stocksService: StocksService) {

  }

  filterChange(event: any) {
    this.getStocks(event);
  }

  ngOnInit(): void {
    this.getStocks();
  }

  private getStocks(filter?: any) {
    this.stocksService.getStocks(filter).subscribe((stocksResponse) => {
      this.stocks = stocksResponse;
    });
  }
}
