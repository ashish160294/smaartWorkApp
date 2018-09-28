import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService implements OnInit {

  constructor(private httpclient: HttpClient) {
  }
  ngOnInit() {}
  getUserRequests() {
    return this.httpclient.post('http://localhost:3000/userequests',
      { 'userName': JSON.parse(localStorage.getItem('currentUser'))['UserName'] });
  }
}
