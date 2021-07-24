
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockQuoteComponent } from './stock-quote/stock-quote.component';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';



@NgModule({
    declarations: [
        StockComponent,
        StockQuoteComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        StockRoutingModule,
    ],
    exports: [
    ]
})
export class StockModule {

}