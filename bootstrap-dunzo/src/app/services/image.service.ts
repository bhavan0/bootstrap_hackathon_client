import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  SERVER_URL = 'https://localhost:44322/api/image';
  constructor(private httpClient: HttpClient) { }

  httpOtions = {
    // Set the format of data required from the API
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public upload(data) {
    data = data.slice(23);

    const data2: JsonDto = {
      ImageBit: data
    };

    const uploadURL = `${this.SERVER_URL}/parse`;

    return this.httpClient.post<any>(uploadURL, data2, this.httpOtions);
  }

  public getAll(): Observable<any> {

    const uploadUrl = `${this.SERVER_URL}/metadata`;
    return this.httpClient.get(uploadUrl);
  }

  public saveData(data: any): Observable<any> {
    const saveURL = `${this.SERVER_URL}/save`;
    return this.httpClient.post<any>(saveURL, data);
  }

  public getAllData(): Observable<any> {
    const uploadUrl = `${this.SERVER_URL}/getAllData`;
    return this.httpClient.get(uploadUrl);
  }
}

export class JsonDto {
  ImageBit: String;
}