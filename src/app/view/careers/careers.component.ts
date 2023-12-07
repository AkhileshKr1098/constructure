import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  carrear_data: any

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private  _crud :  CrudService

  ) { }

  ngOnInit(): void {
     this._crud.get_career().subscribe(
      (res:any)=>{
        console.log(res);
        this.carrear_data =  res
      }
     )
  }



  onMouseEnter() {
    this.renderer.removeClass(document.querySelector('.orange-border'), 'shrink');
    this.renderer.addClass(document.querySelector('.orange-border'), 'grow');
    this.renderer.addClass(document.querySelector('.CTA'), 'active');
  }

  onMouseLeave() {
    this.renderer.removeClass(document.querySelector('.orange-border'), 'grow');
    this.renderer.addClass(document.querySelector('.orange-border'), 'shrink');
    this.renderer.removeClass(document.querySelector('.CTA'), 'active');
  }

  carrear_desc(data: any) {
    this.router.navigate(['/careersDesc'])
    this._crud.carrear_data.next(data)
  }
}
