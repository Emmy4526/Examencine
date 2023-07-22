import { Component, OnInit } from '@angular/core';
import { TmdbService } from './tmdb.service';

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.tmdbService.getMovies().subscribe(
      (data) => {
        // Suponemos que las películas se encuentran en data.results[0].items
        this.movies = data.results[0].items.map((movie: any) => ({
          title: movie.title,
          overview: movie.overview,
          poster_path: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
        }));
      },
      (error) => console.error('Error al obtener lista de películas', error)
    );
  }
}
