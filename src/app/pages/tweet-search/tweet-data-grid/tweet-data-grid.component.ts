import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tweet } from '../../../shared/model/tweet.model';
import { formatNumber, formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../../shared/service/data-storage.service';
import { TweetService } from '../../../shared/service/tweet.service';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-tweet-data-grid',
  templateUrl: './tweet-data-grid.component.html',
  styleUrls: ['./tweet-data-grid.component.scss']
})
export class TweetDataGridComponent {
  
  subscription!: Subscription;
  rowData?: Tweet[] = [];
  dateId!: number;
  tweetSearchForm: FormGroup = new FormGroup({
    searchterm: new FormControl('', [Validators.required]),
  });
  processing = false;
  errorLabelMap = {
    required: 'Required',
  };

  columnDefs = [
    {headerName: 'Username', field: 'username', sortable: true, filter: true, maxWidth: 150},
    {headerName: 'Tweet', field: 'fullText', minWidth: 600, maxWidth: 600, autoHeight: true, wrapText: true},
    {headerName: 'Sentiment', field: 'sentiment', sortable: true, maxWidth: 150, cellStyle: function(params: any) {
      switch (params.value) {
        case 'NEGATIVE': 
          return {color: 'red'}
        case "POSITIVE": 
          return {color: 'green'}
        default: 
          return
      }
  }}
];


  controlLabelMap = {
    searchTerm: 'Search Term',
  };

  constructor(private dataStorageService: DataStorageService, private covidService: TweetService, private utilityService: UtilityService) { 
    this.utilityService.setPageLoading(false);
  }

  isControlInvalidated(formControlName: string): boolean {
      return (this.tweetSearchForm.get(formControlName)?.invalid ?? false) && (this.tweetSearchForm.get(formControlName)?.touched ?? false);
  }

  getDateIdFromDate(value: Date) {
    const dateString = formatDate(value, "yyyyMMdd", 'en');
    return parseInt(dateString);
  }


searchTweets(): void {
  if (this.tweetSearchForm.invalid) {
    this.tweetSearchForm.markAllAsTouched();
    return;
  }
  this.utilityService.setPageLoading(true);
  this.processing = true;
  let searchTerm = this.tweetSearchForm.get('searchterm')?.value ?? "";
  this.subscription = this.dataStorageService.fetchTweetData(searchTerm).subscribe((updatedTweetData: Tweet[]) => {
    this.rowData = [...updatedTweetData];
    this.utilityService.setPageLoading(false);
    this.processing = false;
})
}
 
ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
