import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShymkentStudiosComponent } from './shymkent-studios.component';

describe('ShymkentStudiosComponent', () => {
  let component: ShymkentStudiosComponent;
  let fixture: ComponentFixture<ShymkentStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShymkentStudiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShymkentStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
