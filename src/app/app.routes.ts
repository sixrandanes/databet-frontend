import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes  = [
  { path: '404', component: NotFoundComponent },
  { path: '', loadChildren: './home/home.module#HomeModule'}
];

export const routing = RouterModule.forRoot(routes);
