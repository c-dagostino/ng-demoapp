import { Injectable } from '@angular/core';
import { Stock } from '../model/stock.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class StockService {
    private url = environment.fetchStockUrl;
    stockDataChanged = new Subject<Stock[]>();
  
    private stockData: Stock[] = [];

    constructor(private http: HttpClient) {
       
    }

  
   
     
      setStockData(stockData: Stock[]) {
          this.stockData = stockData;
          this.stockDataChanged.next(this.stockData.slice());
      }

      getStockData() {
          return [...this.stockData];
      }

      getStockDataRow(index: number) {
          return this.stockData[index];
      }
}