import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from 'src/app/model/plant';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { PlantService } from 'src/app/service/plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.plantColumns;
  list$: Observable<Plant[]> = this.plantService.getAll();

  constructor(
    private config: ConfigService,
    private plantService: PlantService
  ) { }

  ngOnInit(): void {
  }

}
