import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(
   public http: HttpClient,

  ) {
    super(http);
    this.entity = 'users'
  }
}
