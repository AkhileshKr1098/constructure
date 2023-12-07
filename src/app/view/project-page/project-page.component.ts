import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  project_data :  any
  constructor(
    private _crud : CrudService,
    
  ){}

  ngOnInit(): void {
      this._crud.card_project.subscribe(
        (res:any)=>{
            console.log(res);
            this.project_data =  res[0]
        }
      )
  }

  // img_url: string = '../../../assets/1.jpg'
  // title_of_project  : string = "Grandstand Roof"
  // desc_of_project  :  string = "Greater Noida, UP  40m Cantilever with minimum steel"
}
