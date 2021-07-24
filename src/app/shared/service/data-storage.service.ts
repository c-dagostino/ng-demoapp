import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TweetService } from './tweet.service';
import { Tweet } from '../model/tweet.model';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { StockService } from './stock.service';
import { Stock } from '../model/stock.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    private fetchTweetsUrl = environment.fetchTweetsUrl;
    private fetchStockUrl = environment.fetchStockUrl;
    private stockHeaders = new HttpHeaders() 
    constructor(private http: HttpClient, private tweetService: TweetService, private stockService: StockService) {
        this.stockHeaders.append("x-rapidapi-key", environment.xRapidApiKey);
        this.stockHeaders.append("x-rapidapi-host", environment.xRapidApiHost);
    }
    fetchStockData(symbol: string) {
          return this.http.get<Stock[]>(this.fetchStockUrl + symbol, {headers: this.stockHeaders})
        .pipe(
            map(stockData => {
                return stockData.map(item => {
                    return {...item};
                });
            }),
            tap((stockData: Stock[]) => {
                this.stockService.setStockData(stockData);
            })
        );
    }

    fetchTweetData(searchTerm: string) {
        return this.http.get<Tweet[]>(this.fetchTweetsUrl + searchTerm)
      .pipe(
          map(tweetData => {
              return tweetData.map(item => {
                  return {...item};
              });
          }),
          tap((tweetData: Tweet[]) => {
              this.tweetService.setTweetData(tweetData);
          })
      );
  }
  }