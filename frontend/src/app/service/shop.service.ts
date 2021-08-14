import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Shop } from '../model/shop';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class ShopService extends BaseService<Shop> {

  constructor(
    public config : ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'shops'
  }
}
