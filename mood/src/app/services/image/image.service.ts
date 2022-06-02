import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from 'config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    
  private url: string = HOST.apiUrl;

  constructor(
    private http: HttpClient
  ) { }



  public showImageById(id: number): any {
    return this.http.get(`${this.url}image/show/${id}`, {observe: 'response', headers: {'Accept':  'image/jpg', 'Authorization': 'x-amzn-errortype'}, responseType: "blob"});
  }

  public getUserImage(email: string): any {
    return this.http.get(`${this.url}image/getUserImage/${email}`);
  }

  public getEstablishmentImageList(name: string): any {
    return this.http.get(`${this.url}image/getEstablishmentImage/${name}`);
  }

  public uploadUserImage(userID: number, file: any): any {
    return this.http.post(`${this.url}image/uploadUserImage/${userID}`, 
    file, 
    {
      reportProgress: true,
      observe: 'events'
    });
  }

  public uploadEstablishmentImage(establishmentName: string, [file]: any[]): any {
    return this.http.post(`${this.url}image/uploadEstablishementImages/${establishmentName}`, 
    [file], 
    {
      reportProgress: true,
      observe: 'events'
    });
  }

  public deleteUserImage(id: number, email: string): any {
    return this.http.get(`${this.url}image/${id}/${email}`);
  }


}
