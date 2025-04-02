import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatorComponent } from './animator.component';

describe('AnimatorComponent', () => {
  let component: AnimatorComponent;
  let fixture: ComponentFixture<AnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
