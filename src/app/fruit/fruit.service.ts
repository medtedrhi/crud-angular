import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://localhost:3000/fruits';

  getAll(): Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(this.apiUrl);
  }

  create(data: Fruit): Observable<any> {
    return this.getAll().pipe(
      map(fruits => {
        const maxId = fruits.reduce((max, fruit) => Math.max(max, fruit.id), 0);
        const newId = maxId + 1;
        const newFruit: Fruit = { ...data, id: newId };
        return newFruit;
      }),
      switchMap(newFruit => this.httpClient.post(this.apiUrl, newFruit))
    );
  }

  edit(id: Number): Observable<Fruit> {
    return this.httpClient.get<Fruit>(`${this.apiUrl}/${id}`);
  }

  update(data : Fruit) {
    return this.httpClient.put<Fruit>(`${this.apiUrl}/${data.id}`, data);
  }

  delete(id: number): Observable<Fruit> {
    return this.httpClient.delete<Fruit>(`${this.apiUrl}/${id}`);
  }

}
