import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-google-require-token-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-require-token-page.component.html',
  styleUrls: ['./google-require-token-page.component.scss']
})
export class GoogleRequireTokenPageComponent {
  private readonly tokenService = inject(TokenService);

  protected readonly authUrl$ = this.tokenService.getAuthorizationURL();
}
