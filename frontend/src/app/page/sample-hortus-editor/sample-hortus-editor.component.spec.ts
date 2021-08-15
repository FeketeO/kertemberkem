import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHortusEditorComponent } from './sample-hortus-editor.component';

describe('SampleHortusEditorComponent', () => {
  let component: SampleHortusEditorComponent;
  let fixture: ComponentFixture<SampleHortusEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleHortusEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleHortusEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
