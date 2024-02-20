import { Component, OnInit } from '@angular/core';
import { EventCreatorService } from '../../services/event-creator.service';
import { CreateParticipantDialogComponent } from '../../dialogs/create-participant-dialog/create-participant-dialog.component';
import { MatDialog } from '@angular/material/dialog';


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

  constructor(private eventService: EventCreatorService, private dialog: MatDialog) {}

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

  openParticipantDialog(): void {
    const dialogRef = this.dialog.open(CreateParticipantDialogComponent, {
      width: '400px',
      data: {} // You can pass data to the dialog if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close
    });
  }
}
