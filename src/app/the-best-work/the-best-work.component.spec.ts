import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBestWorkComponent } from './the-best-work.component';

describe('TheBestWorkComponent', () => {
  let component: TheBestWorkComponent;
  let fixture: ComponentFixture<TheBestWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBestWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBestWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
