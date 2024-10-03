import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AlbumActions from '../../store/actions/album.actions';
import { Album } from '../../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private store: Store) {}

  loadAlbums() {
    this.store.dispatch(AlbumActions.loadAlbums());
  }

  addAlbum(album: Album) {
    this.store.dispatch(AlbumActions.addAlbum({ album }));
  }

  deleteAlbum(albumId: string) {
    this.store.dispatch(AlbumActions.deleteAlbum({ albumId }));
  }
}
