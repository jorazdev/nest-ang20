import { Routes } from '@angular/router';
import { Home } from './pages/home/home/home';
import { About } from './pages/about/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
];
