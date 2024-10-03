import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, startWith } from 'rxjs';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album/album.service';
import { selectAllAlbums } from '../../store/selectors/album.selectors';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent implements OnInit {
  albums$: Observable<Album[]>; // Observable to hold the album list
  newAlbumTitle: string = ''; // Two-way binding for new album title input
  newAlbumDescription: string = ''; // Optional description for the new album

  constructor(private albumService: AlbumService, private store: Store) {
    this.albums$ = this.store.select(selectAllAlbums); // Select albums from the store
  }

  ngOnInit(): void {
    this.albumService.loadAlbums(); // Load albums when the component is initialized
  }

  addAlbum() {
    if (this.newAlbumTitle.trim()) {
      const newAlbum: Album = {
        id: this.generateUniqueId(),
        title: this.newAlbumTitle,
        description: this.newAlbumDescription,
        photos: [],
        createdAt: new Date(),
      };

      this.albumService.addAlbum(newAlbum); // Dispatch the add album action
      this.newAlbumTitle = ''; // Clear input fields after adding
      this.newAlbumDescription = '';
    }
  }

  deleteAlbum(albumId: string) {
    this.albumService.deleteAlbum(albumId); // Dispatch the delete album action
  }

  // Helper function to generate a unique ID (can be replaced with UUID or other logic)
  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
