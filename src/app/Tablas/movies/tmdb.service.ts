import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = 'f4f7c6862cb7519fa881f2495f6aef1c';
  private baseUrl = 'https://api.themoviedb.org/3';
  private accountId = '20182135'; // Reemplaza con el ID de cuenta correcto

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    const listsUrl = `${this.baseUrl}/account/${this.accountId}/lists?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<any>(listsUrl);
  }
}
