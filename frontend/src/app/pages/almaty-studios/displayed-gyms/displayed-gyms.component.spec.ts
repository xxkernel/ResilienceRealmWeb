import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedGymsComponent } from './displayed-gyms.component';

describe('DisplayedGymsComponent', () => {
  let component: DisplayedGymsComponent;
  let fixture: ComponentFixture<DisplayedGymsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayedGymsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayedGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
