import { Component, OnInit } from '@angular/core';
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
    private gardenService: GardenService
  ) { }

  ngOnInit(): void {
  }

}
