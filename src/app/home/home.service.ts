import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }

  fetchCompetitions(): Observable<any> {
    return this.http.get<any>(`/football-data/competitions`);
  }

    fetchMatchs(): Observable<any> {
        return this.http.get<any>(`/football-data/matchs`);
    }

}