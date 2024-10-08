import { Component } from '@angular/core';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [
    {id: 1, title: "Movie One", director: "Director One", rating: 10},
    {id: 2, title: "Movie Two", director: "Director Two", rating: 9},
    {id: 3, title: "Movie Three", director: "Director Three", rating: 8},
    {id: 4, title: "Movie Four", director: "Director Two", rating: 7}
  ]
}
