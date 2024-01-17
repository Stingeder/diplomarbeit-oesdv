import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventCreatorService {
  /*
  private apiUrl = 'http://your-backend-api/events'; // Your backend API

  constructor(private http: HttpClient) {}

  // Fetch master evaluators
  getMasterEvaluators(): Observable<any[]> {
    // Replace with actual HTTP request
    return this.http.get<any[]>(`${this.apiUrl}/master-evaluators`);
  }

  // Fetch normal evaluators
  getEvaluators(): Observable<any[]> {
    // Replace with actual HTTP request
    return this.http.get<any[]>(`${this.apiUrl}/evaluators`);
  }

  // Fetch participants
  getParticipants(): Observable<any[]> {
    // Replace with actual HTTP request
    return this.http.get<any[]>(`${this.apiUrl}/participants`);
  }

  // Fetch dance types
  getDanceTypes(): Observable<any[]> {
    // Replace with actual HTTP request
    return this.http.get<any[]>(`${this.apiUrl}/dance-types`);
  }

  // Create an event
  createEvent(eventData: any): Observable<any> {
    // Replace with actual HTTP POST request
    return this.http.post<any>(`${this.apiUrl}/create`, eventData);
  }*/
}
