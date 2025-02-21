import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { VoteComponent } from './components/vote/vote.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
