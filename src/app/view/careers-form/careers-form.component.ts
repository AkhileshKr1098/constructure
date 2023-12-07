import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-careers-form',
  templateUrl: './careers-form.component.html',
  styleUrls: ['./careers-form.component.css']
})
export class CareersFormComponent implements OnInit {
  career_form !: FormGroup
  document_url :  any
  document_img :  any
  constructor(
    private router :  Router,
    private  fb :  FormBuilder,
    private _crud : CrudService
  ){}  
  
  ngOnInit(): void {
   this.career_form =  this.fb.group({
    name : ['',Validators.required],
    email : ['',Validators.required],
    education : ['',Validators.required],
    experience : ['',Validators.required],
    skills : ['',Validators.required],
    resume : ['',Validators.required],
   })
  }


  onSubmit(){
    const fromdata =  new FormData()
    fromdata.append('name', this.career_form.get('name')?.value)
    fromdata.append('email', this.career_form.get('email ')?.value)
    fromdata.append('education', this.career_form.get('education')?.value)
    fromdata.append('experience', this.career_form.get('experience')?.value)
    fromdata.append('skills', this.career_form.get('skills')?.value)
    fromdata.append('resume', this.document_url)

    this._crud.post_career(fromdata).subscribe(
      (res:any)=>{
        console.log(res);
        if(res == 'success'){
          alert("Apply Successfully..")
        }
      }
    )
    console.log(this.career_form.value);
  }

  document(files: any) {
    if (files.length === 0) {
      return;
    }
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    this.document_url = files[0];
    reader.onload = () => {
      this.document_img = reader.result;
    };
    reader.readAsDataURL(this.document_url);
  }

}
