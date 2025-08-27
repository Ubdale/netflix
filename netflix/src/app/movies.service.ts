import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private http = inject(HttpClient)
getMovies(){
  return this.http.get('https://imdb-top-100-movies.p.rapidapi.com/',{
    headers: {
      'x-rapidapi-key': 'b53ce7c6ddmsh49da27f1ced0a0bp102f7djsn9f81d8a7f3d0',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  })
}
  constructor() { }
}
