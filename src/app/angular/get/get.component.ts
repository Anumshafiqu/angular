import { HttpClient } from '@angular/common/http';
import { Component, OnInit , inject } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit {
  userList :any [] = [];
  customerList :any [] = [] ;
  posts :any [] =[];
  constructor(private  http:HttpClient){
     this.getAlluser();
     this.getAllCustomers();

  }
  getAlluser(){
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      debugger;
      this.userList = res
    })
  }
  getAllCustomers(){
    this.http.get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers').subscribe((result:any)=>{
      this.customerList = result.data
    },error=>{
      debugger;
    }
    )
  }
  ngOnInit(): void {
    
  }

  // posts: any[] = [];

  // constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
    // this.apiService.getPosts().subscribe(
    //   (data:any) => {
    //     this.posts = data;
    //     console.log(this.posts); // Log the data for testing
    //   },
    //   (error:any) => {
    //     console.error('Error fetching posts:', error);
    //   }
    // );
    // this.getDepartment();
  // }
  // departList :any[] =[];
  // deptobj = {
  //   "departmentId": 0,
  //   "departmentName": "",
  //   "departmentLogo": ""
  // }
  // onSave(){
  //   this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment' , this.deptobj).subscribe((res:any)=>{
  //     if(res.result){
  //       alert('Department created successfully')
  //     }else{
  //       alert(res.message)
  //     }
  //   })
  // }
  // getDepartment(){
  //   this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res:any)=>{
  //   this.departList = res.data
  //   })
  // }
  







//   deptobj = {
//     departmentName: '',
//     departmentLogo: ''
//   };
// http = inject(HttpClient)
//   departList: any[] = []; 
//   onSave() {
//     this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.deptobj)
//       .subscribe((res: any) => {
//         if (res.result) {
//           alert('Department created successfully');
//           // this.getDepartments();
//         } else {
//           alert('Error creating department');
//         }
//       });
//   }
//   getDepartments() {
//     this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
//       .subscribe((data: any) => {
//         this.departList = data;
//       });
//   }

//   ngOnInit(): void {
//     this.getDepartments()
//   }
}

