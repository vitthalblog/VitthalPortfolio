import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import * as firebase from 'firebase/compat/app';
import 'firebase/compat/database';

import { environment } from '../environments/environment';

if (!firebase.default.apps.length) {
  firebase.default.initializeApp(environment.firebaseConfig);
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
