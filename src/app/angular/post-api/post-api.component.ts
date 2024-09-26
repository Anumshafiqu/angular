import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  deptobj = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: ''
  };
  
  http = inject(HttpClient);
  departList: any[] = []; 
  onEdit(data:any){
    this.deptobj = data

  }
  onupdate(){
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment', this.deptobj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Department update successfully');
          this.getDepartments();
        } else {
          alert(res.message);
        }
      });
  }
  onDelete(id:number){
    const isDeleted = confirm("Are you sure you want to delete");
    if(isDeleted){
      this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +id)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Department Delete successfully');
          this.getDepartments();
        } else {
          alert(res.message);
        }
      });
    }


  }
  onSave() {
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.deptobj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Department created successfully');
          this.getDepartments();
        } else {
          alert(res.message);
        }
      });
  }
  
  getDepartments() {
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((res: any) => {
        this.departList = res.data;
      });
  }
  
  ngOnInit(): void {
    this.getDepartments();
  }
}
