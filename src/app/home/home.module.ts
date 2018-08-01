import { NgModule } from '@angular/core';
import { HomeRouting } from './home.route';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    SharedModule,
    HomeRouting,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
    providers: [
        HomeService
     ]
})
export class HomeModule {
}
