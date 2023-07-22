import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

interface Movie {
  title: string;
  poster_path: string;
  overview: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  movies: Movie[] = [];
  totalMovies = 0;
  pageSize = 100;
  pageIndex = 0;
  active: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  setActive() : void {
    this.active = !this.active
  }  

  getPopularMovies(): void {
    const apiKey = 'f4f7c6862cb7519fa881f2495f6aef1c';
    const baseUrl = 'https://api.themoviedb.org/3';

    // Endpoint para obtener las películas populares
    const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${this.pageIndex + 1}`;

    // Llamada al API de TMDb para obtener las películas populares
    this.http.get<any>(popularMoviesUrl).subscribe(
      data => {
        this.totalMovies = data.total_results;
        this.movies = data.results.map((movie: any) => ({
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
          overview: movie.overview
        }));
      },
      error => console.error('Error al obtener lista de películas', error)
    );
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.getPopularMovies();
  }
  navigateToUsers(){
    this.router.navigate(['/users'])
  }
  navigateToMovies(){
    this.router.navigate(['/movies'])
  }
  menulateral(){}
  navigateToProfile(){}
  logout(){
    this.router.navigate(['/login']);
  }

}
