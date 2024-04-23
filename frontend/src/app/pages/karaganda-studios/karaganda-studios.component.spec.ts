import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaragandaStudiosComponent } from './karaganda-studios.component';

describe('KaragandaStudiosComponent', () => {
  let component: KaragandaStudiosComponent;
  let fixture: ComponentFixture<KaragandaStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KaragandaStudiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KaragandaStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
