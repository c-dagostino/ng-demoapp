import { Injectable } from '@angular/core';
import { Tweet } from '../model/tweet.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TweetService {
    tweetDataChanged = new Subject<Tweet[]>();
  
    private tweetData: Tweet[] = [];

    constructor(private http: HttpClient) {
       
    }

  
   
     
      setTweetData(tweetData: Tweet[]) {
          this.tweetData = tweetData;
          this.tweetDataChanged.next(this.tweetData.slice());
      }

      getTweetData() {
          return [...this.tweetData];
      }

      getTweetDataRow(index: number) {
          return this.tweetData[index];
      }
}