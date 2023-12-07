import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import * as UIkit from 'uikit';
import { CrudService } from '../servies/crud.service';
@Component({
  selector: 'app-project-desc-page',
  templateUrl: './project-desc-page.component.html',
  styleUrls: ['./project-desc-page.component.css']
})
export class ProjectDescPageComponent implements OnInit, AfterViewInit {
  project_data:any
  url = 'https://admin.constipationmedicine.in'

  constructor(
    private _crud: CrudService
  ){}
  ngOnInit(): void {
    this._crud.projectDescPageData.subscribe(
      (res:any)=>{
        console.log(res);
        this.project_data =  res
      }
    )
  }
  ngAfterViewInit(): void {
    // UIkit initialization code here
    UIkit.util.on("#slider li", 'click', (event: Event) => {
      const target = event.currentTarget as HTMLLIElement;
      UIkit.slideshow('#slideshow').show(target.getAttribute('uk-slideshow-item'));
    });

    UIkit.util.on("#slideshow", 'itemshow', (a: UIkit.UIEvent, b: { index: number }) => {
      UIkit.slider("#slider").show(b.index);
    });
  }

  ngOnDestroy(): void {
    // Destroy UIkit components when the component is destroyed
    UIkit.util.off("#slider li", 'click');
    UIkit.util.off("#slideshow", 'itemshow');
  }
} 
