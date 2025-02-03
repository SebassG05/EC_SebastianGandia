import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComparisonComponent } from './components/product-comparison/product-comparison.component';

const routes: Routes = [
  { path: 'compare', component: ProductComparisonComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
