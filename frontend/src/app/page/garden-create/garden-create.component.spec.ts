import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCreateComponent } from './garden-create.component';

describe('GardenCreateComponent', () => {
  let component: GardenCreateComponent;
  let fixture: ComponentFixture<GardenCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
