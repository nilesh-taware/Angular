import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeComponent } from './heade.component';

describe('HeadeComponent', () => {
  let component: HeadeComponent;
  let fixture: ComponentFixture<HeadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
