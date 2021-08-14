import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-sample-hortus',
  templateUrl: './sample-hortus.component.html',
  styleUrls: ['./sample-hortus.component.scss']
})
export class SampleHortusComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.sampleHortusColumns;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
