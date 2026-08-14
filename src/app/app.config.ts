import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // Ce qu'on fournit aux dévellopeurs c'est le menu
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
