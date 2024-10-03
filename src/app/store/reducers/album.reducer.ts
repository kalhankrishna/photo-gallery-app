import { createReducer, on } from '@ngrx/store';
import { Album } from '../../models/album.model';
import * as AlbumActions from '../actions/album.actions';

export interface AlbumState {
  albums: Album[];
}

export const initialState: AlbumState = {
  albums: [],
};

export const albumReducer = createReducer(
  initialState,
  on(AlbumActions.loadAlbumsSuccess, (state, { albums }) => ({
    ...state,
    albums,
  })),
  on(AlbumActions.addAlbum, (state, { album }) => ({
    ...state,
    albums: [...state.albums, album],
  })),
  on(AlbumActions.deleteAlbum, (state, { albumId }) => ({
    ...state,
    albums: state.albums.filter((album) => album.id !== albumId),
  }))
);
