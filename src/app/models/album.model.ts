export interface Album {
  id: string; // Unique identifier for the album
  title: string; // Title of the album
  description?: string; // Optional description of the album
  photos: string[]; // Array of photo IDs associated with the album
  createdAt: Date; // Date the album was created
}
