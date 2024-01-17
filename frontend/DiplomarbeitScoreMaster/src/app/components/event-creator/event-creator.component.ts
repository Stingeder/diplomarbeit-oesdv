import { Component, OnInit } from '@angular/core';
import { EventCreatorService } from '../../services/event-creator.service';


@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.scss']
})
export class EventCreatorComponent implements OnInit {
  masterEvaluators: any[] = [];
  evaluators: any[] = [];
  participants: any[] = [];
  danceTypes: any[] = [];
  eventForm: any = {
    name: '',
    masterEvaluator: null,
    evaluators: [],
    participants: [],
    danceType: null
  };

  constructor(private eventService: EventCreatorService) {}

  ngOnInit(): void {
    // this.fetchData();
  }

  fetchData(): void {/*
    this.eventService.getMasterEvaluators().subscribe(data => this.masterEvaluators = data);
    this.eventService.getEvaluators().subscribe(data => this.evaluators = data);
    this.eventService.getParticipants().subscribe(data => this.participants = data);
    this.eventService.getDanceTypes().subscribe(data => this.danceTypes = data);*/
  }

  createEvent(): void {/*
    this.eventService.createEvent(this.eventForm).subscribe({

    });*/
  }
}
