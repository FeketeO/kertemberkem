import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../model/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(
  public config : ConfigService,
   public http: HttpClient,

  ) {
    super(config, http);
    this.entity = 'users'
  }
}
