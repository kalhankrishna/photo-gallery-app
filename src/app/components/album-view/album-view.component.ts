import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../models/photo.model';
import { PhotoService } from '../../services/photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-album-view',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './album-view.component.html',
  styleUrl: './album-view.component.css',
})
export class AlbumViewComponent implements OnInit {
  albumId: string = ''; // Holds the ID of the album from route
  photos$: Observable<Photo[]>; // Observable to hold the photo list
  newPhotoTitle: string = ''; // Two-way binding for new photo title input
  newPhotoUrl: string = ''; // Two-way binding for new photo URL input
  newPhotoTag: string = ''; // New tag input for the photo
  selectedTag: string = ''; // Tag for filtering photos
  availableTags: Tag[] = []; // Holds available tags (assuming from state or input)

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {
    // Retrieve albumId from route params
    this.albumId = this.route.snapshot.paramMap.get('id') ?? '';
    this.photos$ = this.photoService.getPhotosByAlbum(this.albumId); // Load all photos for the album
  }

  ngOnInit(): void {
    this.photoService.loadPhotos(); // Load photos when the component is initialized
  }

  // Filter photos by tag
  filterPhotosByTag(): void {
    if (this.selectedTag.trim()) {
      this.photos$ = this.photoService.getPhotosByAlbumAndTag(
        this.albumId,
        this.selectedTag
      );
    } else {
      this.photos$ = this.photoService.getPhotosByAlbum(this.albumId); // Reset to all photos if no tag selected
    }
  }

  // Add new photo to the album
  addPhoto(): void {
    if (this.newPhotoTitle.trim() && this.newPhotoUrl.trim()) {
      const newPhoto: Photo = {
        id: this.generateUniqueId(),
        title: this.newPhotoTitle,
        url: this.newPhotoUrl,
        tags: this.newPhotoTag ? [this.newPhotoTag] : [],
        albumId: this.albumId,
        createdAt: new Date(),
      };

      this.photoService.addPhoto(newPhoto); // Dispatch add photo action

      if (
        this.newPhotoTag &&
        !this.availableTags.find((tag) => tag.name === this.newPhotoTag)
      ) {
        const newTag: Tag = {
          id: this.generateUniqueId(),
          name: this.newPhotoTag,
          photoIds: [newPhoto.id],
        };
        this.availableTags.push(newTag);
      }

      this.newPhotoTitle = ''; // Clear input fields
      this.newPhotoUrl = '';
    }
  }

  // Delete a photo from the album
  deletePhoto(photoId: string): void {
    this.photoService.deletePhoto(photoId); // Dispatch delete photo action
  }

  // Helper function to generate unique IDs for photos
  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
