import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { SampleHortus } from 'src/app/model/sample-hortus';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-sample-hortus-editor',
  templateUrl: './sample-hortus-editor.component.html',
  styleUrls: ['./sample-hortus-editor.component.scss']
})
export class SampleHortusEditorComponent implements OnInit {

  updating: boolean = false;
  sampleHortus: SampleHortus = new SampleHortus;

  sampleHortus$: Observable<SampleHortus> = this.ar.params.pipe(
    switchMap( params => this.sampleService.get(params.id) )
  );

  constructor(
    private sampleService: SampleService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, sampleHortus: SampleHortus): void {
    if (!sampleHortus._id) {
      this.sampleService.create(sampleHortus).subscribe(
        () => this.sampleService.getAll()
      );
    }
    else {
      this.sampleService.update(sampleHortus).subscribe(
        () => this.sampleService.getAll()
      );
    }
    this.router.navigate(['/', 'sampleHortus'])
  }

}
