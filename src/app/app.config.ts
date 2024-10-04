import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { albumReducer } from './store/reducers/album.reducer';
import { photoReducer } from './store/reducers/photo.reducer';
import { tagReducer } from './store/reducers/tag.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore({ album: albumReducer, photo: photoReducer, tag: tagReducer }),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
  ],
};
