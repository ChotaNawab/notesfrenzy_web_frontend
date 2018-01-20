import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdflectureComponent } from './pdflecture.component';

describe('PdflectureComponent', () => {
  let component: PdflectureComponent;
  let fixture: ComponentFixture<PdflectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdflectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdflectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
