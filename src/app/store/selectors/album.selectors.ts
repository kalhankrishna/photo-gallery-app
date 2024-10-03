import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumState } from '../reducers/album.reducer';

export const selectAlbumState = createFeatureSelector<AlbumState>('album');

export const selectAllAlbums = createSelector(
  selectAlbumState,
  (state: AlbumState) => state.albums
);
