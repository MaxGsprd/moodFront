import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establishment } from '../models/establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  
  private apiServerUrl = environment.apiBaseUrl;
  private httpOptions : any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }

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
