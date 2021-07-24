import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetDataGridComponent } from './pages/tweet-search/tweet-data-grid/tweet-data-grid.component';
import { TweetSearchComponent } from './pages/tweet-search/tweet-search.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetSearchComponent,
    TweetDataGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

