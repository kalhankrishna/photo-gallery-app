import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbumListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'photo-gallery-app';
}
