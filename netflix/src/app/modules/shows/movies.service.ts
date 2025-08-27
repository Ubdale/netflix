import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private http = inject(HttpClient);

  getTrandingShows(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/trending/tv/day?api_key=a1e996d1426beff10fb11d8a3a89a3c7&language=en-US');
  }
  getRecommendedShows(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/tv/3/recommendations?api_key=a1e996d1426beff10fb11d8a3a89a3c7&language=en-US');
  }

  constructor() { }
}
