import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Garden } from 'src/app/model/garden';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { GardenService } from 'src/app/service/garden.service';

@Component({
  selector: 'app-gardens',
  templateUrl: './gardens.component.html',
  styleUrls: ['./gardens.component.scss']
})
export class GardensComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.gardenColumns
  list$: Observable<Garden[]> = this.gardenService.getAll();

  constructor(
    private config: ConfigService,
    private gardenService: GardenService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onSelectOne(garden: Garden): void {
    this.router.navigate(['/', 'gardens', 'edit', garden._id]);
  }

  onDeleteOne(garden: Garden): void {
    this.gardenService.delete(garden._id).subscribe(
      () => this.list$ = this.gardenService.getAll()
      )
  }

}
