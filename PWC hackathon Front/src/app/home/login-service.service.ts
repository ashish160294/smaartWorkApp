import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  IsUserLoggedIn  = false;
  private reqUrl1 = 'http://localhost:3000/login';
  constructor(private http: HttpClient, private router: Router) { }
  login(username: string, password: string) {
    return this.http.post<any>(this.reqUrl1, { username: username, password: password })
      .pipe(map(user => {
          if (user) {
            this.IsUserLoggedIn = true;
              localStorage.setItem('currentUser', JSON.stringify(user));
              if (user.admin === true) {
                this.router.navigate(['dashboard']);
              } else {
                this.router.navigate(['request']);
              }
              return true;
          } else {
            this.IsUserLoggedIn = false;
            return false;
          }
      }));
  }

  logout() {
    this.IsUserLoggedIn = false;
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
