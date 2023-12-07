import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servies/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  project_data: any
  books_data: any
  design_data:any
  url = 'https://admin.constipationmedicine.in'

  constructor(
    private _crud: CrudService,
    private router :  Router
  ) { }

  ngOnInit(): void {
    this._crud.get_project().subscribe(
      (res: any) => {
        // console.log(res);
        this.project_data = res.slice(0, 4);
      }
    )

    this._crud.get_books().subscribe(
      (res: any) => {
        // console.log(res);
        this.books_data = res.slice(0, 4);
      }
    )

     this.get_design()

  }

  onSingalBook(data: any) {
    this.router.navigate(['/singalbook'] , data.id)
    this._crud.book_.next(data)
    window.scrollTo(0,0)
  }

  get_design(){
  this._crud.get_design().subscribe(
    (res:any)=>{
      console.log(res);
      this.design_data =  res
    }
  )
  }

  onProject(pro:any){
    window.scroll(0,0)
    this._crud.projectDescPageData.next(pro)
    this.router.navigate(['/ProjectDescPage'])
  }
}
