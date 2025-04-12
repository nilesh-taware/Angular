import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [GalleryComponent]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`images has default value`, () => {
    expect(component.images).toEqual([
      `https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg`,
      `https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg`,
      `https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg`,
      `https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg`,
      `https://images.pexels.com/photos/34950/pexels-photo.jpg`,
      `https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg`,
      `https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg`,
      `https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg`,
      `https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg`,
      `https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg`,
      `https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg`,
      `https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
      `https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg`,
      `https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg`,
      `https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg`,
      `https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1200`
    ]);
  });
});
