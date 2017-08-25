import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDeFormationComponent } from './offre-de-formation.component';

describe('OffreDeFormationComponent', () => {
  let component: OffreDeFormationComponent;
  let fixture: ComponentFixture<OffreDeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreDeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreDeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
