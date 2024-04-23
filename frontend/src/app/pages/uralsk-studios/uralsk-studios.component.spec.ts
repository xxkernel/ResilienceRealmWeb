import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UralskStudiosComponent } from './uralsk-studios.component';

describe('UralskStudiosComponent', () => {
  let component: UralskStudiosComponent;
  let fixture: ComponentFixture<UralskStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UralskStudiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UralskStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
