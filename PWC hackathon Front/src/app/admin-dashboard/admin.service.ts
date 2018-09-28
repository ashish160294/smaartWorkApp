import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {
  }
  fetchRecords() {
    return this.httpClient.get('http://localhost:3000/requests');
  }
  updateStatus(payload) {
    return this.httpClient.post('http://localhost:3000/updateReqStatus', payload);
  }
}
