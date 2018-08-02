import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'databet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test: any;

  matches: any;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.fetchCompetitions().subscribe(res => this.test=res);

      this.homeService.fetchMatchs().subscribe(res => this.matches=res);
  }
}
