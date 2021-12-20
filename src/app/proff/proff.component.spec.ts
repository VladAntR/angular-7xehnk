import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffComponent } from './proff.component';

describe('ProffComponent', () => {
  let component: ProffComponent;
  let fixture: ComponentFixture<ProffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
