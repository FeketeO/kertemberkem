import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Garden } from '../model/garden';

@Injectable({
  providedIn: 'root'
})
export class GardenService extends BaseService<Garden>{

  constructor(
    public http:HttpClient
  ) {
    super(http);
    this.entity = 'gardens'
   }
}
