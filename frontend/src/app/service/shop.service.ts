import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Shop } from '../model/shop';


@Injectable({
  providedIn: 'root'
})
export class ShopService extends BaseService<Shop> {

  constructor(
    public http: HttpClient
  ) {
    super(http);
    this.entity = 'shops'
  }
}
