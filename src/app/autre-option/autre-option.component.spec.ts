import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreOptionComponent } from './autre-option.component';

describe('AutreOptionComponent', () => {
  let component: AutreOptionComponent;
  let fixture: ComponentFixture<AutreOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutreOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutreOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
