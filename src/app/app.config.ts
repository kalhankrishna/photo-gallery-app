import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, ActionReducer, MetaReducer } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { localStorageSync } from 'ngrx-store-localstorage';
import { albumReducer } from './store/reducers/album.reducer';
import { photoReducer } from './store/reducers/photo.reducer';
import { tagReducer } from './store/reducers/tag.reducer';

// Create the sessionStorageSync meta-reducer
export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  if (typeof sessionStorage !== 'undefined') {
    return localStorageSync({
      keys: ['album', 'photo', 'tag'], // Specify state slices to sync with sessionStorage
      rehydrate: true, // Ensure state is rehydrated from sessionStorage on app load
      storage: sessionStorage, // Specify sessionStorage instead of localStorage
    })(reducer);
  }

  // If sessionStorage is unavailable (SSR), return the original reducer without syncing
  return reducer;
}

// Define metaReducers array
const metaReducers: Array<MetaReducer<any, any>> = [sessionStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(
      { album: albumReducer, photo: photoReducer, tag: tagReducer },
      { metaReducers }
    ),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
  ],
};
