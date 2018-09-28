import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  reqUrl = 'http://localhost:3000/register';
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.reqUrl, user);
  }
}
