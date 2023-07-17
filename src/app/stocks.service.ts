import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient: HttpClient) { }

  getStocks(filter?: any): Observable<Stock[]> {
    return this.httpClient.post<Stock[]>('http://localhost:4200/api/stocks', {query: filter});
  }


}
