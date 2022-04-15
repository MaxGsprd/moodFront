import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateUser } from '../models/in/AuthenticateUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = "http://localhost:8080/api/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient) { }

  login(data: AuthenticateUser): Observable<any> {
    return this.http.post(this.api_url+'authentication/login', JSON.stringify(data), {headers: {'Content-Type':  'application/json'}, responseType: 'text' });
  }
}
