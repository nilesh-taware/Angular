import { Component} from "@angular/core";
import { FormGroup,ReactiveFormsModule, FormControl,Validators} from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  signUpForm = new FormGroup({
    
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),

    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),

    address: new FormGroup({
      street: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),

      city: new FormControl("", [Validators.required,
         Validators.minLength(5)]),
      region: new FormControl("", [Validators.required])
    })

  });

  updateProfile() {
    this.signUpForm.patchValue({
      firstName: "Nilesh",
      lastName: "Taware",
      address: {
        street: "127 Happy Street",
        city:"AMD",
        region:"IND"
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
