import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SampleHortus } from '../model/sample-hortus';


@Injectable({
  providedIn: 'root'
})
export class SampleService
  extends BaseService<SampleHortus> {

    constructor(
     public http: HttpClient,

    ) {
      super(http);
      this.entity = 'samples'
          }
  }
