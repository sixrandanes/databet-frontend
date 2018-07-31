import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoute: Routes = [
  {path: '', component: HomeComponent}
];

export const HomeRouting = RouterModule.forChild(homeRoute);
