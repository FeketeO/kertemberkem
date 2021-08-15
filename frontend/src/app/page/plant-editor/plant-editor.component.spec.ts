import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantEditorComponent } from './plant-editor.component';

describe('PlantEditorComponent', () => {
  let component: PlantEditorComponent;
  let fixture: ComponentFixture<PlantEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
