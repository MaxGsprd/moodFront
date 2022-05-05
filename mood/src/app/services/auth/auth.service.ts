import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from 'config/app.config';
import { Observable } from 'rxjs';
import { AuthenticateUser } from 'src/app/models/in/AuthenticateUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private url: string = HOST.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient) { }

  login(data: AuthenticateUser): Observable<any> {
    return this.http.post(this.url+'authentication/login', JSON.stringify(data), {headers: {'Content-Type':  'application/json'}, responseType: 'text' });
  }
}