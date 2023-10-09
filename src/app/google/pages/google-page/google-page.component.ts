import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-google-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatIconModule,
  ],
  templateUrl: './google-page.component.html',
  styleUrls: ['./google-page.component.scss'],
})
export class GooglePageComponent {}
