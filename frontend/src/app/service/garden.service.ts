import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Garden } from '../model/garden';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GardenService extends BaseService<Garden>{

  constructor(
    public config : ConfigService,
    public http:HttpClient
  ) {
    super(config, http);
    this.entity = 'gardens'
   }
}
