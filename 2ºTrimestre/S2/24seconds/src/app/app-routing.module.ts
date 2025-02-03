import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { VoteComponent } from './components/vote/vote.component';
import { ProductComparisonComponent } from './components/product-comparison/product-comparison.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'compare', component: ProductComparisonComponent },
  { path: 'vote', component: VoteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
