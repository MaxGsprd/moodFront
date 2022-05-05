import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from 'config/app.config';
import { Observable } from 'rxjs';
import { establishmentDetails } from 'src/app/models/in/establishmentDetail';
import { establishmentForm } from 'src/app/models/out/establishmentForm';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private url: string = HOST.apiUrl;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }

  public getAllEstablishments(): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.url}establishments`);
  }

  public getEstablishment(establishmentId: number): Observable<establishmentDetails> {
    return this.http.get<establishmentDetails>(`${this.url}/establishments/${establishmentId}`);
  }

  public getEstablishmentsByName(establishmentName: string): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.url}/establishments/${establishmentName}`);
  }

  public getEstablishmentsByCategory(categoryId: number): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.url}/establishments/category${categoryId}`);
  }

  public getEstablishmentsByStatus(status: number): Observable<establishmentDetails[]> {
    return this.http.get<establishmentDetails[]>(`${this.url}/establishmentsByStatus/${status}`);
  }

  public addEstablishment(establishment: establishmentForm): Observable<establishmentForm> {
    return this.http.post<establishmentForm>(`${this.url}/newEstablishment`, establishment);
  }

  public updateEstablishment(establishment: establishmentForm): Observable<establishmentForm> {
    return this.http.put<establishmentForm>(`${this.url}/establishment/${establishment}`, establishment);
  }

  public deleteEstablishment(establishmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/establishment/${establishmentId}`);
  }
}