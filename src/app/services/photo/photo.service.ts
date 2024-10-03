import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PhotoActions from '../../store/actions/photo.actions';
import { Photo } from '../../models/photo.model';
import {
  selectAllPhotos,
  selectPhotosByAlbumIdAndTag,
} from '../../store/selectors/photo.selectors';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private store: Store) {}

  loadPhotos() {
    this.store.dispatch(PhotoActions.loadPhotos());
  }

  addPhoto(photo: Photo) {
    this.store.dispatch(
      PhotoActions.addPhoto({ photo, albumId: photo.albumId })
    );
  }

  deletePhoto(photoId: string) {
    this.store.dispatch(
      PhotoActions.deletePhoto({ photoId, albumId: photoId })
    );
  }

  getPhotosByAlbum(albumId: string): Observable<Photo[]> {
    return this.store
      .select(selectAllPhotos)
      .pipe(
        map((photos) => photos.filter((photo) => photo.albumId === albumId))
      );
  }

  getPhotosByAlbumAndTag(albumId: string, tag: string): Observable<Photo[]> {
    return this.store.select(selectPhotosByAlbumIdAndTag(albumId, tag));
  }
}
