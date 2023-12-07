import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit {
  team_data :any
  url = 'https://admin.constipationmedicine.in'

  constructor(
    private _crud:CrudService
  ){}
  
  ngOnInit(): void {
    this.get_team_data()
  }
  get_team_data(){
    this._crud.get_team().subscribe(
      (res:any)=>{
        console.log(res);
        
        this.team_data = res
        console.log(this.team_data);
      }
    )
  }

}
