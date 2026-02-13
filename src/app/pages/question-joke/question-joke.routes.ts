import { Routes } from '@angular/router';
import { RouteData } from '../../models/route-data.model';

export const QUESTION_JOKE_ROUTES: Routes = [
  {
    path: 'question-joke',
    loadComponent: () =>
      import('./question-joke').then(m => m.QuestionJoke),
		data: <RouteData>{
			header: { title: 'S. Valentino' },
			sidenav: {text: 'S. Valentino'},
			footer: { text: 'per amossito' }
		}
  },
];