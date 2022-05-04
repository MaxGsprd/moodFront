
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthenticateUser } from '../models/in/AuthenticateUser';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api_url = "http://localhost:8080/api/";
  httpOptions : any;

  constructor(private http: HttpClient, private token_storage: TokenStorageService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        'Authorization': 'Bearer ' + this.token_storage.getToken()
      })
    };
  }

  setInscription(data: any): Observable<any> {
    return this.http.put<any>(this.api_url+'user/register', JSON.stringify(data), {headers: {'Content-Type':  'application/json'}});
  }

  getUser(id: Number) : Observable<any> {
    return this.http.get(this.api_url+'user/'+id, this.httpOptions);
  }

}