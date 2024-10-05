import { Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumViewComponent } from './components/album-view/album-view.component';

export const routes: Routes = [
  { path: '', component: AlbumListComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'album/:id',
    component: AlbumViewComponent,
    data: { breadcrumb: 'Album' },
  },
];
