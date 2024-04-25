import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectKaComponent } from './select-ka.component';

describe('SelectKaComponent', () => {
  let component: SelectKaComponent;
  let fixture: ComponentFixture<SelectKaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectKaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectKaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
