import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShComponent } from './select-sh.component';

describe('SelectShComponent', () => {
  let component: SelectShComponent;
  let fixture: ComponentFixture<SelectShComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectShComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectShComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
