import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { Garden } from 'src/app/model/garden';
import { GardenService } from 'src/app/service/garden.service';

@Component({
  selector: 'app-garden-editor',
  templateUrl: './garden-editor.component.html',
  styleUrls: ['./garden-editor.component.scss']
})
export class GardenEditorComponent implements OnInit {

  garden: Garden = new Garden();

  garden$: Observable<Garden> = this.ar.params.pipe(
    switchMap( params => this.gardenService.get(params.id) )
  );

  constructor(
    private gardenService: GardenService,
    private router: Router,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, garden: Garden): void {
    if (!garden._id) {
      this.gardenService.create(garden).subscribe(
        () => this.gardenService.getAll()
      );
    }
    else {
      this.gardenService.update(garden).subscribe(
        () => this.gardenService.getAll()
      );
    }
    this.router.navigate(['/', 'gardens'])
  }


}
