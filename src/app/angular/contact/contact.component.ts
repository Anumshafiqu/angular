import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm
  onsubmit(form: NgForm) {
    console.log(this.myForm)
    this.Submitted = true;
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;

  }
  defaultvalue = "Angular";
  username = '';
  Submitted = false
  formData: any = {
    username : '',
    email : ''   ,
    course : ''  , 
    gneder : ''  ,
  }

  
  ngOnInit(): void {

  }
  genders = [
    {id : '1' , value : 'Male'},
    {id : '2' , value : 'Female'}
  ]
  defaultgender = 'Male'
  setUsername(){
    this.myForm.setValue({
      userDetail :{
        username :'uxtrendz',
        email : ''
      },
      course : '',
      gender : ''
    });
    this.myForm.form.patchValue({
      userDetail :{
        username :'uxtrendz',
      },
    })
  }
}
