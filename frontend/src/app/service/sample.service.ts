import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SampleHortus } from '../model/sample-hortus';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class SampleService
  extends BaseService<SampleHortus> {

    constructor(
      public config : ConfigService,
      public http: HttpClient,

    ) {
      super(config,http);
      this.entity = 'samples'
          }
  }
