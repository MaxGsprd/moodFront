
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from 'config/app.config';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = HOST.apiUrl;
  httpOptions : any;

  constructor(
    private http: HttpClient, 
    private token_storage: TokenStorageService
    ) {}

  setInscription(data: any): Observable<any> {
    return this.http.put<any>(this.url+'user/register', JSON.stringify(data), {headers: {'Content-Type':  'application/json'}});
  }

  getUser(id: Number) : Observable<any> {
    return this.http.get(this.url+'user/'+id);
  }

  getUserByEmail(email: String) : Observable<any> {
    return this.http.get(this.url+'user/byemail/'+ email);
  }

}