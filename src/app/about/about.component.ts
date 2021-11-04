import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  
  @ViewChild('fform') feedbackFormDirective:any;
  feedbackForm:FormGroup;
  user:any=[];
 
  constructor(private fb:FormBuilder) {
    this.createdForm();
   }

  ngOnInit(): void {
    
  }
  
  formErrors: { [key: string]: any } = {
    'firstname': '',
    'message': '', 
  };

  ValidationMessages: { [key: string]: any } ={
    'firstname': {
      'required':'First Name is required ',
      'minlength':'First Name must be atleast 2 characters long',
      'maxlength':'First Name cannot be more than 15 characters long'
    },
    'message': {
      'required': 'Feedback cannot be empty',
      'minlength': 'Feedback must be  atleast 5 characters long'
    }
  }

  createdForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['' ],
      email: ['' ],
      message: ['',[Validators.required,Validators.minLength(5)]]

    })
    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm)return; 
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.ValidationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit(){
    this.user.push(this.feedbackForm.value);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    })
    this.feedbackFormDirective.resetForm();
    localStorage.setItem('Users',JSON.stringify(this.user));
    this.user.push(JSON.parse(localStorage.getItem('Users')||'')); 
  }
 


}
