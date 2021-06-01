import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionSectionComponent } from './suscription-section.component';

describe('SuscriptionSectionComponent', () => {
  let component: SuscriptionSectionComponent;
  let fixture: ComponentFixture<SuscriptionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriptionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
