import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>

  constructor(private movieService: MovieService) {
    this.movies$ = this.movieService.getMovies()
  }

  ngOnInit(): void {
  }

}
