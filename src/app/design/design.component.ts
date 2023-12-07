import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../view/servies/crud.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  url = 'https://admin.constipationmedicine.in/'

  design_data: any
  search_data :any
  constructor(
    private router: Router,
    private _crud: CrudService
  ) {}

  ngOnInit(): void {
    this._crud.get_design().subscribe(
      (res: any) => {
        console.log(res);
        this.design_data = res
        this.search_data =  res
      }
    )
  }

  base_url = "https://www.africau.edu/images/default/sample.pdf"
  base_url2 = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  base_url3 = "https://www.orimi.com/pdf-test.pdf"

  onSearch(e: any) {
    console.log(e);

    this.design_data = this.search_data.filter((item: any) => {
      if (item.BookTitle.toString().toLowerCase().indexOf(e.toLowerCase()) !== -1) {
        return true;

      }

      if (item.BookWriter.toString().toLowerCase().indexOf(e.toLowerCase()) !== -1) {
        return true;
      }

     
      return false;

    }
    );
  }

  onSingalBook(data: any) {
    // this.router.navigate(['/singalbook'], data.id)
    // this._crud.book_.next(data)
  }

}
