import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SosService {

  constructor(public http: HttpClient) {
  }
  SOS() {
    return this.http.post('http://localhost:3000/sos', { });
  }
  updatelocation(position): void {
    console.log(position);
  }

}
