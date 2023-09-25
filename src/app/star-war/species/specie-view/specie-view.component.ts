import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Specie } from '../../model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-specie-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './specie-view.component.html',
  styleUrls: ['./specie-view.component.scss']
})
export class SpecieViewComponent {
  @Input({required: true}) data!: Specie;
}
