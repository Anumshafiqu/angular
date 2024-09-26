import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor() { }
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Sample API URL

  constructor(private http: HttpClient) {}

  // Method to get data from the API
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
