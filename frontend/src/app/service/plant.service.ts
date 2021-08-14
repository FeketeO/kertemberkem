import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Plant } from '../model/plant';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PlantService extends BaseService<Plant> {

  constructor(
    public config : ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'plants'
   }
}
