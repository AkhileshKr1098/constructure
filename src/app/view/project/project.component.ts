import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servies/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  url = 'https://admin.constipationmedicine.in'
  project_data:any
  imageLoader = true;
  constructor(
    private _crud :  CrudService,
    private routing :  Router
  ){}


  ngOnInit(): void {
    this._crud.get_project().subscribe(
      (res:any)=>{
        console.log(res);
        this.project_data =  res
      }
    )
  }

  onProjectDesc(data:any){
    
    this._crud.projectDescPageData.next(data)
    this.routing.navigate(['/ProjectDescPage']);

  }

}
