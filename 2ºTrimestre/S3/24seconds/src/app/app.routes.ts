import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { ForgotPassFromComponent } from './components/auth/forgot-pass-from/forgot-pass-from.component';
import { ProductComparisonComponent } from './components/product-comparison/product-comparison.component';
import { VoteComponent } from './components/vote/vote.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { ResultsComponent } from './components/results/results.component';
import { CustomShoeConfiguratorComponent } from './components/custom-shoe-configurator/custom-shoe-configurator.component'; // 👈 IMPORTA EL COMPONENTE
import { TorneosComponent } from './components/torneos/torneos.component';
import { VideosComponent } from './components/videos/videos.component'; // 👈 IMPORTA EL COMPONENTE
import { VoteVideosComponent } from './components/vote-videos/vote-videos.component'; // 👈 IMPORTA EL COMPONENTE

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'forgot-password', component: ForgotPassFromComponent },
  { path: 'compare', component: ProductComparisonComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'custom-shoe', component: CustomShoeConfiguratorComponent }, // 👈 AÑADE ESTA RUTA
  { path: 'torneos', component: TorneosComponent }, // Agrega la ruta para torneos
  { path: 'videos', component: VideosComponent }, // 👈 AÑADE ESTA RUTA
  { path: 'voteVideos', component: VoteVideosComponent }, // 👈 AÑADE ESTA RUTA
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
