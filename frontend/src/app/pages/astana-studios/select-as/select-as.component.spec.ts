import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAsComponent } from './select-as.component';

describe('SelectAsComponent', () => {
  let component: SelectAsComponent;
  let fixture: ComponentFixture<SelectAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectAsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
