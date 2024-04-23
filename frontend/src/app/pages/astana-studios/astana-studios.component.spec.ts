import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstanaStudiosComponent } from './astana-studios.component';

describe('AstanaStudiosComponent', () => {
  let component: AstanaStudiosComponent;
  let fixture: ComponentFixture<AstanaStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstanaStudiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AstanaStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
