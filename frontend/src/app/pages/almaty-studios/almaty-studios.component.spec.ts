import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmatyStudiosComponent } from './almaty-studios.component';

describe('AlmatyStudiosComponent', () => {
  let component: AlmatyStudiosComponent;
  let fixture: ComponentFixture<AlmatyStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmatyStudiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmatyStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
