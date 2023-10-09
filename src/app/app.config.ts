import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  importProvidersFrom,
  inject,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';

import { routes } from './app.routes';
import { ConfigurationToken as GoogleConfigurationToken } from './google/models';
import { configuration as googleConfiguration } from './configs/google';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  DateAdapter,
  MatNativeDateModule,
  NativeDateModule,
} from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: GoogleConfigurationToken, useValue: googleConfiguration },
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(MatNativeDateModule),
    {
      provide: DateAdapter,
      useClass: NativeDateModule,
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const iconRegistry = inject(MatIconRegistry);
        const outlinedFontSetClasses = iconRegistry
          .getDefaultFontSetClass()
          .filter((fontSetClass) => fontSetClass !== 'material-icons')
          .concat(['material-symbols-outlined']);
        iconRegistry.setDefaultFontSetClass(...outlinedFontSetClasses);
      },
    },
  ],
};
