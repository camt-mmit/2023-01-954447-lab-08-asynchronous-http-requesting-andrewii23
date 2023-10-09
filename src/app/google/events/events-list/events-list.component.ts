import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsList, displayEventTimeRange } from '../../models';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent {
  @Input({ required: true }) data!: EventsList;

  protected readonly displayEventTimeRange = displayEventTimeRange;
}
