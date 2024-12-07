import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cat} from '../Shared/cats';
//Where the data is stored
import { CAT_ARRAY} from '../Shared/mock-cats';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  //Create a local copy of the data to serve to the components
  private cats: Cat[] = CAT_ARRAY;

  constructor() { }
  //Method to return all cats in list
  getCats(): Observable<Cat[]> {
    return of(this.cats);
  }

  //Method to return a single cat by id
  getCatById(id: number): Observable<Cat | undefined> {
    return of(this.cats.find((cat) => cat.id === id));
  }
}
