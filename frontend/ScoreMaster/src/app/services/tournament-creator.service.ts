import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentCreatorService {

  tournamentName = "";
  tournamentType = "";

  tournamentTypes: string[] = [
    "Standardtanz",
    "Lateintanz",
    "Hip-Hop",
    "Ballett",
    "Tango Argentino"
  ];

  constructor() { }
}
