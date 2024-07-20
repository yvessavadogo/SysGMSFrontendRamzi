import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneAChargeService {
  private apiUrlBase = 'http://127.0.0.1:8000/api';
  private apiUrlSegment = 'personnesacharge';

  constructor(private http: HttpClient) {}

  getAllByMutualiste(idMutualiste: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlBase}/${idMutualiste}/${this.apiUrlSegment}`);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlBase}/${this.apiUrlSegment}/${id}`);
  }

  create(idMutualiste: number, data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrlBase}/${idMutualiste}/${this.apiUrlSegment}`, data, {
      headers: {
        'Accept': 'application/json'
      }
    });
  }

  update(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrlBase}/${this.apiUrlSegment}/${id}`, data, {
      headers: {
        'Accept': 'application/json'
      }
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlBase}/${this.apiUrlSegment}/${id}`);
  }
}
