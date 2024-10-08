import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //not good practice to put this here, but just for simplicity of small app....
  private apiUrl = 'https://localhost:7296';

  constructor(private http : HttpClient) { }

  // returns obs of type movie array; gets value asynchronously after subscribing to obs
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
