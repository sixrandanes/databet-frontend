import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'databet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test: any;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.fetchCompetitions().subscribe(res => this.test=res);
  }
}
