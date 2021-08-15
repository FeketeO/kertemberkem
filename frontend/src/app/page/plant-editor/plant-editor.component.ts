import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { Plant } from 'src/app/model/plant';
import { PlantService } from 'src/app/service/plant.service';

@Component({
  selector: 'app-plant-editor',
  templateUrl: './plant-editor.component.html',
  styleUrls: ['./plant-editor.component.scss']
})
export class PlantEditorComponent implements OnInit {

  updating: boolean = false;
  plant: Plant = new Plant();

  plant$: Observable<Plant> = this.ar.params.pipe(
    switchMap( params => this.plantService.get(params.id) )
  );

  constructor(
    private plantService: PlantService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, plant: Plant): void {
    if (!plant._id) {
      this.plantService.create(plant).subscribe(
        () => this.plantService.getAll()
      );
    }
    else {
      this.plantService.update(plant).subscribe(
        () => this.plantService.getAll()
      );
    }
    this.router.navigate(['/', 'plants'])
  }

}
