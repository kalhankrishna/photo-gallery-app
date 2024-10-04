import { Routes } from '@angular/router';
import { AlbumViewComponent } from './components/album-view/album-view.component';

export const routes: Routes = [
  { path: 'album/:id', component: AlbumViewComponent },
];
