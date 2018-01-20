import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchloarshipsComponent } from './schloarships.component';

describe('SchloarshipsComponent', () => {
  let component: SchloarshipsComponent;
  let fixture: ComponentFixture<SchloarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchloarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchloarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
