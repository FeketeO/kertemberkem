import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private plantService: PlantService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onSelectOne(plant: Plant): void {
    this.router.navigate(['/', 'plants', 'edit', plant._id]);
  }

  onDeleteOne(plant: Plant): void {
    this.plantService.delete(plant._id).subscribe(
      () => this.list$ = this.plantService.getAll()
      )
  }
}
