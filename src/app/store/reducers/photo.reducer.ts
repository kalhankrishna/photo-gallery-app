import { createReducer, on } from '@ngrx/store';
import { Photo } from '../../models/photo.model';
import * as PhotoActions from '../actions/photo.actions';

export interface PhotoState {
  photos: Photo[];
}

export const initialState: PhotoState = {
  photos: [],
};

export const photoReducer = createReducer(
  initialState,
  on(PhotoActions.loadPhotosSuccess, (state, { photos }) => ({
    ...state,
    photos,
  })),
  on(PhotoActions.addPhoto, (state, { photo }) => ({
    ...state,
    photos: [...state.photos, photo],
  })),
  on(PhotoActions.deletePhoto, (state, { photoId }) => ({
    ...state,
    photos: state.photos.filter((photo) => photo.id !== photoId),
  }))
);
