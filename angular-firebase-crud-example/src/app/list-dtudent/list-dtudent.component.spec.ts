import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDtudentComponent } from './list-dtudent.component';

describe('ListDtudentComponent', () => {
  let component: ListDtudentComponent;
  let fixture: ComponentFixture<ListDtudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDtudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDtudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
