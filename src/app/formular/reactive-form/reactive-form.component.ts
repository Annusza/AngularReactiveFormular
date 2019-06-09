import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  ValidatorFn} from '@angular/forms';
// import { equalSegments } from "@angular/router/src/url_tree";
import 'rxjs';
import { RegisteredUser } from './interface';



const passwordMatchValidator: ValidatorFn = (controlForm: FormGroup) => {

  const password = controlForm.get('password');
  //console.log(password); console.log(password.value);
  const confirmPassword = controlForm.get('confirmPassword');
  //console.log(confirmPassword); console.log(confirmPassword.value);

  if (
    password.value !== confirmPassword.value
  ) {
    return { passwordMissmatch: true };
  } else {
    return null;
  }
} ;

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  user: RegisteredUser;
  contactForm: FormGroup;

  //message = new ReactiveMessage();
  message: RegisteredUser;


  ngOnInit() {
    this.contactForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]),
        surname: new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9-+\ )(].{8,}$')
      ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z!@#$%^&]{8,}$')
        ]),
        confirmPassword: new FormControl(null, Validators.required),

        // confirmPassword: new FormControl (null,  [Validators.required, matchPassword('password')]),
        pet: new FormControl(null),

        city: new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]),

        street: new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]),

        building: new FormControl(null, [
          Validators.required,
          Validators.minLength(1)
        ]),

        flatNo: new FormControl(null),

        newsletter: new FormControl(null, Validators.requiredTrue),

        sms: new FormControl(null, Validators.requiredTrue)

      },
      { validators: passwordMatchValidator }
    );

  //   this.contactForm.get('name').valueChanges.subscribe(value => {
  //     console.log(value);
  //   });
  //   this.contactForm.get('surname').valueChanges.subscribe(value => {
  //     console.log(value);
  //   });
  //   this.contactForm.get('email').statusChanges.subscribe(value => {
  //     console.log(value);
  //   });
  //   this.contactForm.get("phone").statusChanges.subscribe(value => {
  //     console.log(value);
  //   });
  //   this.contactForm.get('password').statusChanges.subscribe(value => {
  //     console.log(value);
  //   });

  //   this.contactForm.get('confirmPassword').statusChanges.subscribe(value => {
  //     console.log(value);
  //   });

  // this.contactForm.get('pet').statusChanges.subscribe(value => {
  //     console.log(value);
  //   });
  }



  onSubmit() {


    console.log(this.message);
    let name = this.contactForm.value.name.trim();
    let surname = this.contactForm.value.surname.trim();
    let email = this.contactForm.value.email.trim();
    let phone = this.contactForm.value.phone.trim();
    let password = this.contactForm.value.password.trim();
    let pet = this.contactForm.value.pet;


    //let city = this.contactForm.value.address.city.trim();
    let city = this.contactForm.value.city.trim();
    let street = this.contactForm.value.street.trim();
    let building = this.contactForm.value.building.trim();
    let flatNo = this.contactForm.value.flatNo.trim();

    let newsletter = this.contactForm.value.newsletter;
    let sms = this.contactForm.value.sms;



    this.message = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      password: password,
      pet: pet,
      address: {
        city: city,
        street: street,
        building: building,
        flatNo: flatNo
      },
      consents : {
        newsletter: true,
        sms: true
      }
    };

    console.log(this.message);



    this.onReset();

    console.log(this.message);
  }

  onReset() {
    this.contactForm.reset({});
  }
}


// class ReactiveMessage {
//   constructor(
//     public surname?: string,
//     public name?: string,
//     public email?: string,
//     public phone?: string,
//     public password?: string,
//     public confirmPassword?: string,
//     public pet?: string,
//   ) {}
// }


// public class Address {
//   city?: string,
//   street: string = '',
//   building: string = '',
//   // czy to poniżej ok?
//   flatNo: string ='' || null,
// }

// class Consents {
//   newsletter: boolean
//   sms: boolean
// }

//
//
//


