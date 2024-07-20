import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MutualisteService {
  private apiUrl = 'http://127.0.0.1:8000/api/mutualistes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(data: FormData): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: {
        'Accept': 'application/json'
      }
    });
}

  update(id: number, data: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}`, data, {
      headers: {
        'Accept': 'application/json'
      }
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
