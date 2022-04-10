import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private apiServerUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  public getAllEstablishments(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/establishments`);
  }
}
