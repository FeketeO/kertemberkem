import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHortusComponent } from './sample-hortus.component';

describe('SampleHortusComponent', () => {
  let component: SampleHortusComponent;
  let fixture: ComponentFixture<SampleHortusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleHortusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleHortusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
