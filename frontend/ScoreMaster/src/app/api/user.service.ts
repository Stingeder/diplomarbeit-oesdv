import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../app.module';
import { Observable } from 'rxjs';
import { TooltipTouchGestures } from '@angular/material/tooltip';

interface TournamentUser {
  id: number;
  username: string;
  password: string;
  type: number;
  tournamentId: number;
  connectionString: string;
}

interface ConnectionString {
  id: number;
  connectionString: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  getUsers(): Observable<TournamentUser[]> {
    return this.httpClient.get<TournamentUser[]>(this.baseUrl + '/users');
  }

  getUserById(id: number): Observable<TournamentUser> {
    return this.httpClient.get<TournamentUser>(this.baseUrl + '/users/' + id);
  }

  getUserByName(name: string): Observable<TournamentUser> {
    return this.httpClient.get<TournamentUser>(this.baseUrl + '/users/name/' + name);
  }

  newUser(user: TournamentUser): Observable<TournamentUser> {
    return this.httpClient.post<TournamentUser>(this.baseUrl + '/users', user);
  }

  updateConnectionStringUser(connectionString: ConnectionString): Observable<TournamentUser> {
    return this.httpClient.patch<TournamentUser>(this.baseUrl + '/users/connectionString', connectionString);
  }

  getConnectionStringByUsername(username: string): Observable<TournamentUser> {
    return this .httpClient.get<TournamentUser>(this.baseUrl + '/users/connectionString/' + username);
  }
}
