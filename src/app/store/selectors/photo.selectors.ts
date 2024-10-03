import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotoState } from '../reducers/photo.reducer';
import { AlbumState } from '../reducers/album.reducer';

export const selectPhotoState = createFeatureSelector<PhotoState>('photo');

export const selectAllPhotos = createSelector(
  selectPhotoState,
  (state: PhotoState) => state.photos
);

export const selectPhotosByAlbumIdAndTag = (albumId: string, tag: string) =>
  createSelector(selectAllPhotos, (photos) =>
    photos.filter(
      (photo) => photo.albumId === albumId && photo.tags.includes(tag)
    )
  );
