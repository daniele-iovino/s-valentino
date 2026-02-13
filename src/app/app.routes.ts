import { Routes } from '@angular/router';
import { QUESTION_JOKE_ROUTES } from './pages/question-joke/question-joke.routes';

export const routes: Routes = [
	...QUESTION_JOKE_ROUTES,  // 👈 feature question joke

  // default
  {
    path: '',
    redirectTo: 'question-joke',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'question-joke'
  }
];