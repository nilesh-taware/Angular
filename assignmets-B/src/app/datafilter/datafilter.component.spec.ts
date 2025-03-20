import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafilterComponent } from './datafilter.component';

describe('DatafilterComponent', () => {
  let component: DatafilterComponent;
  let fixture: ComponentFixture<DatafilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatafilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatafilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
