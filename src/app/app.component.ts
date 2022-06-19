import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { StudentModel } from './app.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EtablissementCrud';
  formValue !: FormGroup;
  studentObj : StudentModel = new StudentModel();
  api: any;
  studentData: any;
  showAdd !: boolean;
 // showUpdate !: boolean;

  constructor( private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      class: ['']
      
    })
}

clickAddStudent(){
  this.formValue.reset();
  this.showAdd = true;
  //this.showUpdate = false;
}

postStudentDetails() {
  this.studentObj.FirstName = this.formValue.value.firstName;
   this.studentObj.LastName = this.formValue.value.lastName;
   this.studentObj.Class = this.formValue.value.class;
  
  this.api.PostStudent(this.studentObj)
    .subscribe((res: any) => {
      console.log(res);
      let ref = document.getElementById('close');
      ref?.click();
       })    
}

getStudentDetails() {
  this.api.GetStudent()
  .subscribe((res: any)=>{
    this.studentData = res.studentDetails;
    
  })
}
}
