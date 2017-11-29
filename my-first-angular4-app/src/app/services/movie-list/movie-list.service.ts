import { Injectable } from '@angular/core';

@Injectable()
export class MovieListService {

  listItems: string[]= ["Movie1", "Movie2"];

  constructor() { }

  getMovies(){
    return this.listItems;
  }
}
