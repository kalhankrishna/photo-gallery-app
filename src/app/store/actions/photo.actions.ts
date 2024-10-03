import { createAction, props } from '@ngrx/store';
import { Photo } from '../../models/photo.model';

export const loadPhotos = createAction('[Photo] Load Photos');
export const loadPhotosSuccess = createAction(
  '[Photo] Load Photos Success',
  props<{ photos: Photo[] }>()
);
export const addPhoto = createAction(
  '[Photo] Add Photo',
  props<{ photo: Photo; albumId: string }>()
);
export const deletePhoto = createAction(
  '[Photo] Delete Photo',
  props<{ photoId: string; albumId: string }>()
);
