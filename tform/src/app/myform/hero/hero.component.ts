import { Component } from '@angular/core';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  powers=['Good Looking','Smart','Cleaver'];

  model=new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted=false;
  onSubmit(){this.submitted=true}
  
  newHero() {
    this.model = new Hero(42, '', '');
  }
  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }


  }


