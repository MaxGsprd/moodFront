import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { establishmentDetails } from '../models/in/establishmentDetails';
import { establishmentForm } from '../models/out/establishmentForm';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  
  private apiServerUrl = environment.apiBaseUrl;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }

  public getAllEstablishments(): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.apiServerUrl}/establishments`);
  }

  public getEstablishment(establishmentId: number): Observable<establishmentDetails> {
    return this.http.get<establishmentDetails>(`${this.apiServerUrl}/establishments/${establishmentId}`);
  }

  public getEstablishmentsByName(establishmentName: string): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.apiServerUrl}/establishments/${establishmentName}`);
  }

  public getEstablishmentsByCategory(categoryId: number): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.apiServerUrl}/establishments/category${categoryId}`);
  }

  public getEstablishmentsByStatus(status: number): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.apiServerUrl}/establishmentsByStatus/${status}`);
  }

  public addEstablishment(establishment: establishmentForm): Observable<establishmentForm> {
    return this.http.post<establishmentForm>(`${this.apiServerUrl}/newEstablishment`, establishment);
  }

  public updateEstablishment(establishment: establishmentForm): Observable<establishmentForm> {
    return this.http.put<establishmentForm>(`${this.apiServerUrl}/establishment/${establishment}`, establishment);
  }

  public deleteEstablishment(establishmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/establishment/${establishmentId}`);
  }
}
