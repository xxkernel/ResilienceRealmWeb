import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUComponent } from './select-u.component';

describe('SelectUComponent', () => {
  let component: SelectUComponent;
  let fixture: ComponentFixture<SelectUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
