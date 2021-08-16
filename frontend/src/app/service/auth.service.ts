import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../model/user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  currentUserSubject$ : BehaviorSubject < User | null > = new BehaviorSubject<User | null>(null);
  loginUrl : string = `${this.config.apiUrl}login`;
  loginOut : string = `${this.config.apiUrl}logout`;
  lastToken : string = '';
  storageName = 'currentUser';
  currentUserValue: any;
  currentUser$: any;



  constructor(
    private config : ConfigService,
      private http : HttpClient,
      private router : Router,
      private userService: UserService
  ) {
    if (localStorage.currentUser) {
      const user: User = JSON.parse(localStorage.currentUser);
      this.lastToken = user.accessToken || '';
      this.currentUserSubject$.next(user);
  }
   }




  login(loginData: User): Observable<any> {
    return this.http.post<{ accessToken: string }>(
      this.loginUrl,
      { email: loginData.email, password: loginData.password }
    )
    .pipe( switchMap( response => {
      if (response.accessToken) {
        this.lastToken = response.accessToken;
        return this.userService.query(`email=${loginData.email}`);
      }
      return of(null);
    }))
    .pipe(
      tap( user => {
        if (!user) {
          localStorage.removeItem(this.storageName);
          this.currentUserSubject$.next(null);
        } else {
          user[0].token = this.lastToken;
          localStorage.setItem(this.storageName, JSON.stringify(user[0]));
          this.currentUserSubject$.next(user[0]);
        }
      })
    );
  }


  logout(): void {
    this.lastToken = '';
    this.currentUserSubject$.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/', 'login']);
}
}
