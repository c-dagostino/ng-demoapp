import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from '../../../shared/model/stock.model';
import { formatNumber, formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../../shared/service/data-storage.service';
import { StockService } from '../../../shared/service/stock.service';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-stock-quote-component',
  templateUrl: './stock-quote.component.html',
  styleUrls: ['./stock-quote.component.scss']
})
export class StockQuoteComponent {
  
  subscription!: Subscription;
  public stockData?: Stock[] = [];
  dateId!: number;
  stockSearchForm: FormGroup = new FormGroup({
    symbol: new FormControl('', [Validators.required]),
  });
  processing = false;
  errorLabelMap = {
    required: 'Required',
  };

  constructor(private dataStorageService: DataStorageService, private covidService: StockService, private utilityService: UtilityService) { 
    this.utilityService.setPageLoading(false);
  }

isControlInvalidated(formControlName: string): boolean {
    return (this.stockSearchForm.get(formControlName)?.invalid ?? false) && (this.stockSearchForm.get(formControlName)?.touched ?? false);
}

getStock(): void {
  if (this.stockSearchForm.invalid) {
    this.stockSearchForm.markAllAsTouched();
    return;
  }
  this.utilityService.setPageLoading(true);
  this.processing = true;
  let searchTerm = this.stockSearchForm.get('symbol')?.value ?? "";
  this.subscription = this.dataStorageService.fetchStockData(searchTerm).subscribe((updatedStockData: Stock[]) => {
    this.stockData = [...updatedStockData];
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
