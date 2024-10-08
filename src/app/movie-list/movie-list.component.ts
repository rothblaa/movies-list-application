import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = []

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(moviesFromApi => this.movies = moviesFromApi)
  }

}
