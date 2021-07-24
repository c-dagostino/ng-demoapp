import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { TweetSearchComponent } from './pages/tweet-search/tweet-search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: TweetSearchComponent},
  { path: 'stocks', loadChildren: () => import('../app/pages/stock/stock.module').then(m => m.StockModule)}, //Lazy Loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
