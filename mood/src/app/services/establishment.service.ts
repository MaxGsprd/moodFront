import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from '../models/establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  
  private apiServerUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  public getAllEstablishments(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`${this.apiServerUrl}/establishments`);
  }

  public getEstablishment(establishmentId: number): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.apiServerUrl}/establishments/${establishmentId}`);
  }

  public getEstablishmentsByName(establishmentName: string): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`${this.apiServerUrl}/establishments/${establishmentName}`);
  }

  public getEstablishmentsByCategory(categoryId: number): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`${this.apiServerUrl}/establishments/category${categoryId}`);
  }

  public getEstablishmentsByStatus(status: number): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`${this.apiServerUrl}/establishmentsByStatus/${status}`);
  }

  // public addEstablishment(establishment: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiServerUrl}/newEstablishment`, establishment);
  // }

  // public updateEstablishment(establishment: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiServerUrl}/establishment/${establishment}`, establishment);
  // }

  public deleteEstablishment(establishmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/establishment/${establishmentId}`);
  }
}
