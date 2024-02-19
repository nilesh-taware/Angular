import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentComponent } from './about-component.component';

describe('AboutComponentComponent', () => {
  let component: AboutComponentComponent;
  let fixture: ComponentFixture<AboutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
