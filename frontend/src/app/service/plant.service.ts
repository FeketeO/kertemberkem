import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Plant } from '../model/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService extends BaseService<Plant> {

  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.entity = 'plants'
   }
}
