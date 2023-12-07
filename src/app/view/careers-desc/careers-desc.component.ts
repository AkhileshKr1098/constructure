import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-careers-desc',
  templateUrl: './careers-desc.component.html',
  styleUrls: ['./careers-desc.component.css']
})
export class CareersDescComponent implements OnInit{
  carrear_des_data :  any
  constructor(
    private router :  Router,
    private   _crud :  CrudService
  ){}
  ngOnInit(): void {
    this._crud.carrear_data.subscribe(
      (res:any)=>{
         this.carrear_des_data = res
         console.log(this.carrear_des_data);
         
      }
    )
  }

  onFormOpen(){
    this.router.navigate(['careersForm'])
  }
}
