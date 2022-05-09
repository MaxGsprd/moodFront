import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from 'config/app.config';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticateUser } from 'src/app/models/in/AuthenticateUser';
import { BaseComponent } from 'src/app/_shared/core/base.components';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseComponent {
  loggedIn = new BehaviorSubject<boolean>(false);
  userNotFound = new BehaviorSubject<boolean>(false);

  

  
  private url: string = HOST.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':"Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type': 'application/json',
      "Access-Control-Allow-Credentials": "true"
     })
  };

  

  constructor(private http : HttpClient) {
    super();
   }

  /*login(data: AuthenticateUser): Observable<any> {
    return this.http.post(this.url+'authentication/login', JSON.stringify(data), {headers: {'Content-Type':  'application/json'}, responseType: 'text' });
  }*/

  login(data: AuthenticateUser): void{
    console.log(data);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    if(!!data){
      this.userNotFound.next(false);
      this.loggedIn.next(false);
      this.http.post(this.url+'authentication/login', JSON.stringify(data), { 'headers': headers, withCredentials: true, responseType: 'text'} ).pipe().subscribe((res: any) => {
        console.log(res.body)
        /*const result = rest.split(" ");
        this.tokenService.saveToken(result[0]);
        this.setGlobalUser(result[1]);*/
     });
    }
  }
}