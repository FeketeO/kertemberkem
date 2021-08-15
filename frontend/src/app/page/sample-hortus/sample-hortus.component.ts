import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private sampleService: SampleService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onSelectOne(sampleHortus: SampleHortus): void {
    this.router.navigate(['/', 'sampleHortus', 'edit', sampleHortus._id]);
  }

  onDeleteOne(sampleHortus: SampleHortus): void {
    this.sampleService.delete(sampleHortus._id).subscribe(
      () => this.list$ = this.sampleService.getAll()
      )
  }

}
