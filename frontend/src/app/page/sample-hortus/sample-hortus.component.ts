import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleHortus } from 'src/app/model/sample-hortus';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-sample-hortus',
  templateUrl: './sample-hortus.component.html',
  styleUrls: ['./sample-hortus.component.scss']
})
export class SampleHortusComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.sampleHortusColumns;
  list$: Observable<SampleHortus[]> = this.sampleService.getAll();

  constructor(
    private config: ConfigService,
    private sampleService: SampleService
  ) { }

  ngOnInit(): void {
  }

}
