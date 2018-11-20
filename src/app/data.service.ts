import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICustomer } from './template';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url : 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  getCustomer() : Observable <ICustomer[]> 
  {
    return this.http.get<ICustomer[]>(this.url).pipe(map(data => 
              {
                return data['results'];
              }));
  }
}
