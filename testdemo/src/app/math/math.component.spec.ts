import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathComponent } from './math.component';

describe('MathComponent', () => {
  let component: MathComponent;
  let fixture: ComponentFixture<MathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    expect(component.add(5, 3)).toBe(8);
  });

  it('should substract two numbers',()=>{
    expect(component.sub(4,3)).toBe(1);
  });

  it('should multiply two numbers',()=>{
    expect(component.multi(4,3)).toBe(12);
  });
  it('should divide two numbers',()=>{
    expect(component.sub(4,2)).toBe(2);
  });
});
