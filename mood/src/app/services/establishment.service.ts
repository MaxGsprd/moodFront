import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstablishmentIn } from '../models/in/establishment-in';
import { EstablishmentOut } from '../models/out/establishment-out';

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

  public getAllEstablishments(): Observable<EstablishmentIn[]> {
    return this.http.get<EstablishmentIn[]>(`${this.apiServerUrl}/establishments`);
  }

  public getEstablishment(establishmentId: number): Observable<EstablishmentIn> {
    return this.http.get<EstablishmentIn>(`${this.apiServerUrl}/establishments/${establishmentId}`);
  }

  public getEstablishmentsByName(establishmentName: string): Observable<EstablishmentIn[]> {
    return this.http.get<EstablishmentIn[]>(`${this.apiServerUrl}/establishments/${establishmentName}`);
  }

  public getEstablishmentsByCategory(categoryId: number): Observable<EstablishmentIn[]> {
    return this.http.get<EstablishmentIn[]>(`${this.apiServerUrl}/establishments/category${categoryId}`);
  }

  public getEstablishmentsByStatus(status: number): Observable<EstablishmentIn[]> {
    return this.http.get<EstablishmentIn[]>(`${this.apiServerUrl}/establishmentsByStatus/${status}`);
  }

  public addEstablishment(establishment: EstablishmentOut): Observable<EstablishmentOut> {
    return this.http.post<EstablishmentOut>(`${this.apiServerUrl}/newEstablishment`, establishment);
  }

  public updateEstablishment(establishment: EstablishmentOut): Observable<EstablishmentOut> {
    return this.http.put<EstablishmentOut>(`${this.apiServerUrl}/establishment/${establishment}`, establishment);
  }

  public deleteEstablishment(establishmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/establishment/${establishmentId}`);
  }
}
