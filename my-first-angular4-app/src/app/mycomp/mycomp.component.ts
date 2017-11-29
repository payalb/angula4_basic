import { Component, OnInit } from '@angular/core';
import {MovieListService} from '../services/movie-list/movie-list.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})

export class MycompComponent implements OnInit {

listItems: string[];

  constructor(private _movieListService: MovieListService) { 
    this.listItems= _movieListService.getMovies();
  }

  ngOnInit() {
  }

}
