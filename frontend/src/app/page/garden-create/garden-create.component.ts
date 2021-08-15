import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Garden } from 'src/app/model/garden';
import { GardenService } from 'src/app/service/garden.service';

@Component({
  selector: 'app-garden-create',
  templateUrl: './garden-create.component.html',
  styleUrls: ['./garden-create.component.scss']
})
export class GardenCreateComponent implements OnInit {

  garden: Garden = new Garden();

  constructor(
    private gardenService: GardenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.gardenService.create(ngForm.value).subscribe(
      plant => this.router.navigate(['/', 'gardens']),
      err => console.error(err)
    );
  }
}
