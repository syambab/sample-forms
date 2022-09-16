import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordMinLengthRequired, ConfirmPasswordRequired, EmailPattrenRequired, EmailRequired, FirstNameRequired, FullNameRequired, GenderRequired, MatchConfirmPasswordRequired, MinLengthOfNameRequired, MinLengthOfPasswordRequired, MobilenumberPattrenRequired, MobileNumberRequired, PasswordRequired } from 'src/errorMessage/errorMessage';

@Component({
  selector: 'app-reslogin',
  templateUrl: './reslogin.component.html',
  styleUrls: ['./reslogin.component.css']
})
export class ResloginComponent implements OnInit {
  firstNameRequired: string = FirstNameRequired; 
  emailRequired: string = EmailRequired;
  emailPattrenOfEmailRequired: string = EmailPattrenRequired;
  mobileNumberRequired: string = MobileNumberRequired;
  mobilenumberPattren: string = MobilenumberPattrenRequired;
  fullNameRequired: string = FullNameRequired;
  passwordRequired: string = PasswordRequired;
  confirmPasswordRequired: string = ConfirmPasswordRequired;
  matchConfirmPassword: string = MatchConfirmPasswordRequired;
  genderRequired: string = GenderRequired;
  minLengthOfPassword: string = MinLengthOfPasswordRequired;
  minLengthOfName: string = MinLengthOfNameRequired;
  minLengthConfirmPasswordRequired: string = ConfirmPasswordMinLengthRequired;
  password!: string 
  show = false;
  Hidepassword: boolean = false;
  form: FormGroup;
  forming: FormGroup
  isSubmitted: boolean = false;
  isSubmitting: boolean = false;
  disableTextbox: boolean = true
  isVisibleSin: boolean = true
  onSign: boolean = true
  isHdrBt1SignSubmitting: boolean = true
  isRegisterSubmitting: boolean = true
  isShow = false;
  isVisibleregi: boolean = true
  input: any;
  FormControls: boolean = true;
  disabled: boolean = false
  disabeldSign:boolean=true;
  disabeldRegister:boolean=true;
  constructor(private FormBuilder:FormBuilder) { 
    this.forming = this.FormBuilder.group({ 
      emaillog: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
        passwordLog: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]],
    }),
      this.form = FormBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z.]+$')]],
        email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
        gender: ['', [Validators.required]],
        phno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[6-9]{1}[0-9]{9}")]],
        confirmpassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]],
        password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@$]+$'), Validators.minLength(5), Validators.maxLength(18)]],
      },
        {
          validators: this.Match('password', 'confirmpassword')
        })
  }

  ngOnInit(): void {
    this.password = 'password';
    this.isVisibleregi = false
    console.log(this.form.value)
  } 

  get f() { return this.form.controls }
  get signInForm() { return this.forming.controls }
  Match(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['Match']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ Match: true });
      }
      else {
        matchingControl.setErrors(null);
      }
    }
  }

  onBtTwoSubmit() {
    this.isSubmitted = true
    if (this.form.valid) {
      this.isVisibleSin = true
      this.isVisibleregi = false
      this.forming.reset();
      alert("Hello"+"  "+this.form.value.name+"  "+" You Are Successfully Registered.")
    }
    else if (!this.form.valid){
    // alert("Form Is Empty or Not Valid.")
    }
  }
  onBtoneSubmitt() {
    this.disabled=false
    if (this.forming.valid) {
      this.isVisibleregi = true
      this.isVisibleSin = false
      this.isSubmitting=false
      this.form.reset();

       this.forming.reset();
       this.isSubmitted=false;
      //  this.form.reset();

    }

    else{
      this.isSubmitting = true;

    }
  }

  // touched() {
  //   this.isSubmitted = false;
  //   return this.form.controls
  // }

  onHdrBt2regi() {
    if(this.disabeldRegister==true){
      this.disabeldSign=false
    }
    this.disabeldSign=false

    this.isVisibleSin = false
    if (this.isRegisterSubmitting) {
      this.isVisibleregi = true
    }
  }

  onHdrBt1SignIn() {
    this.disabeldRegister=false;
    this.isVisibleSin = true
    this.isVisibleregi = false
  }

  forgotPswword() {
    this.isVisibleregi = true
    this.isVisibleSin = false;
    

    if (this.form.valid) {
      this.isVisibleSin = true
      this.form.get('confirmpassword')?.setValue('');
    this.form.get('confirmpassword')?.updateValueAndValidity();
    this.form.get('password')?.setValue('');
    this.form.get('password')?.updateValueAndValidity();
    this.disabled = true;
     
    }
    if(this.form.valid){
         alert("Hello"+"  "+this.form.value.name+"  "+" You Are Password Updated .")
    }
    if(this.isVisibleregi = true){
      this.isVisibleSin = false;
    }

  }

  Hidepasswords() {
    this.Hidepassword = !this.Hidepassword;
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }

}
}
