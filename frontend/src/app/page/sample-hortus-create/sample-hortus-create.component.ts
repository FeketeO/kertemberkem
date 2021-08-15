import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleHortus } from 'src/app/model/sample-hortus';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-sample-hortus-create',
  templateUrl: './sample-hortus-create.component.html',
  styleUrls: ['./sample-hortus-create.component.scss']
})
export class SampleHortusCreateComponent implements OnInit {

  sampleHortus: SampleHortus = new SampleHortus();

  constructor(
    private sampleService: SampleService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.sampleService.create(ngForm.value).subscribe(
      sampleHortus => this.router.navigate(['/', 'sampleHortus']),
      err => console.error(err)
    );
  }

}
