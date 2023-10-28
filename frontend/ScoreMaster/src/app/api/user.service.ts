import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../app.module';
import { Observable } from 'rxjs';

interface TournamentUser {
  id: number;
  username: string;
  password: string;  // Note: Storing password directly on a client-side interface may not be safe.
  type: number;
  tournamentId: number;
  connectionString: string; // Unsure of the purpose of this from context.
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

  neweUser(user: TournamentUser): Observable<TournamentUser> {
    return this.httpClient.post<TournamentUser>(this.baseUrl + '/users', user);
  }
}
