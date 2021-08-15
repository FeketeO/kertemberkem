import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Plant } from 'src/app/model/plant';
import { PlantService } from 'src/app/service/plant.service';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.scss']
})
export class PlantCreateComponent implements OnInit {

  plant: Plant = new Plant();

  constructor(
    private plantService: PlantService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.plantService.create(ngForm.value).subscribe(
      plant => this.router.navigate(['/', 'plants']),
      err => console.error(err)
    );
  }

}
