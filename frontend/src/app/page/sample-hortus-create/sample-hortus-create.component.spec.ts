import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHortusCreateComponent } from './sample-hortus-create.component';

describe('SampleHortusCreateComponent', () => {
  let component: SampleHortusCreateComponent;
  let fixture: ComponentFixture<SampleHortusCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleHortusCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleHortusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
