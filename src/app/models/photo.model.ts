export interface Photo {
  id: string; // Unique identifier for the photo
  title: string; // Title of the photo
  url: string; // URL of the photo
  tags: string[]; // Array of tags associated with the photo
  albumId: string; // ID of the album this photo belongs to
  createdAt: Date; // Date the photo was uploaded
}
