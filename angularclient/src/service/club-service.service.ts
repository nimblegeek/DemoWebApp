import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Club } from '../model/club';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClubService {

  private clubsUrl: string;

  constructor(private http: HttpClient) {
    this.clubsUrl = 'http://localhost:8080/clubs';
  }

  public findAll(): Observable<Club[]> {
    return this.http.get<Club[]>(this.clubsUrl);
  }

  public save(user: Club) {
    return this.http.post<Club>(this.clubsUrl, user);
  }
}
