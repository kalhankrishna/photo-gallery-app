import { createAction, props } from '@ngrx/store';
import { Album } from '../../models/album.model';

export const loadAlbums = createAction('[Album] Load Albums');
export const loadAlbumsSuccess = createAction(
  '[Album] Load Albums Success',
  props<{ albums: Album[] }>()
);
export const addAlbum = createAction(
  '[Album] Add Album',
  props<{ album: Album }>()
);
export const deleteAlbum = createAction(
  '[Album] Delete Album',
  props<{ albumId: string }>()
);
