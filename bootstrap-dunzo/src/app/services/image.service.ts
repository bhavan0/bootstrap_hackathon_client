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

  public getAll(): Observable<Blob> {
    return this.httpClient.get(this.SERVER_URL, { responseType: 'blob' });
  }
}

export class JsonDto {
  ImageBit: String;
}