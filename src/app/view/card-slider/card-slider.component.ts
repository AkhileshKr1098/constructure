import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';
import * as MyFn from '../card-slider/carrdns.js'
import { HttpClient } from '@angular/common/http';

declare function getToday(): any;
declare function greetings(name: any): any

interface project_data {
  ProjectId: number;
  PTitle: string;
  PImage: string;
}

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit, AfterViewInit {
  project_data: any
  _data: any
  base_url: any = 'https://admin.constipationmedicine.in/'
  pro_data_ : any
  pro_data : any
  imageLoader: boolean =  true
  constructor(
    private router: Router,
    private _crud: CrudService,
  
  ) {}

  ngOnInit() {
    this.get_dynamic()
  }

  ngAfterViewInit(): void {
  }

  
  get_dynamic() {
    this.pro_data_ = localStorage.getItem('card')
    this.pro_data = JSON.parse(this.pro_data_)
    console.log(this.pro_data);
    this.project_data =  this.pro_data
    
  }

 
  onProject(data: any) {
    this.router.navigate(['/ProjectDescPage']);
    this._crud.projectDescPageData.next(data)
    // console.log(data);
    window.scrollTo(0, 0)
  }




}


  