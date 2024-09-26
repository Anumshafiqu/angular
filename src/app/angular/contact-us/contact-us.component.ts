import { Component, OnInit } from '@angular/core';
 import { FormArray, FormControl, FormGroup, Validators , AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  myReactiveforms!:FormGroup;
  formStatus:any;
  // notAllowedNames = ['uxtrendz' , 'coding']
genders = [
  {
    id : 1 ,
    gendertype: ' Male '
  },
  {
    id : 2 ,
    gendertype: ' female '
  }

]

ngOnInit(): void {
  this.myReactiveforms= new FormGroup({
    'userdetail' : new FormGroup({
         'username' : new FormControl(null,[Validators.required]),
       'email' : new FormControl(null,[Validators.required,Validators.email], this.NaEmails),
      // email: new FormControl(null, [Validators.required, Validators.email])
    }),
    'course' : new FormControl(null),
    'gender' :new FormControl(null),
    'skills' : new FormArray([
      new FormControl(null,Validators.required),
    ])
  })
  // value change
this.myReactiveforms.valueChanges.subscribe(
  (value) => console.log(value)
)
// status change
this.myReactiveforms.statusChanges.subscribe(
  (status) => {console.log(status)
  this.formStatus = status}
)
// setvalue
// setTimeout(() => {
//   this.myReactiveforms.setValue({
//     'userdetail':  {
//  'username' : 'anum',
//  'email' : 'anum@gmail.com'
//     },
//     'course' :'Html',
//     'gender':'Male',
//     'skills' : [
//       'angular'
//     ]
 
 
//  })
// }, 4000);

// patch value
// setTimeout(() => {
//   this.myReactiveforms.patchValue({
//     'userdetail':  {
//  'email' : 'anum@gmail.com'
//     }

 
 
//  })
// }, 4000);
}
onSubmit(){
  console.log(this.myReactiveforms);
  this.myReactiveforms.reset({
    'userdetail':  {
      'username' : '',
      'email' : ''
         },
         'course' :'Html',
         'gender':'',
         'skills' : [
           ''
         ]
  })
}
onAddSkills(){
  const controls = new FormControl(null,Validators.required);
 (<FormArray> this.myReactiveforms.get('skills')).push(controls)
}
// NaNames(control:FormControl){

//   if(this.notAllowedNames.indexOf(control.value)!==-1){
//     return {'notAllowedNames' : true}
//   }
//   return null
// }
// NaEmails(control:FormControl):Promise<any> | Observable <any>{
//   const myResponse = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       if(control.value === 'anumshafique@gmail.com'){
//         resolve ({'naotaalowedemail':true})
//       }else
//       resolve (null)
//     }, 1500);
//   })
//   return myResponse
// }


// constructor() {
//   this.myReactiveforms = new FormGroup({
//     userdetail: new FormGroup({
//       // Adding both synchronous and asynchronous validators
//       email: new FormControl(null, 
//         [Validators.required, Validators.email],  // Synchronous validators
//         this.NaEmails.bind(this)                  // Asynchronous validator
//       )
//     })
//   });
// }

// Asynchronous validator function
NaEmails(control: AbstractControl): Promise<any> | Observable<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Reject 'anumshafique@gmail.com' and resolve null for other values
      if (control.value === 'anumshafique@gmail.com') {
        resolve({ 'naNotAllowedEmail': true }); // Validation failed
      } else {
        resolve(null); // Validation passed
      }
    }, 1500);
  });
}
}


