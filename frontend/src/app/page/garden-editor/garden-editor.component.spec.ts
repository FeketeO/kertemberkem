import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenEditorComponent } from './garden-editor.component';

describe('GardenEditorComponent', () => {
  let component: GardenEditorComponent;
  let fixture: ComponentFixture<GardenEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
