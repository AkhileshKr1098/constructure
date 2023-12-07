import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  url = 'https://admin.constipationmedicine.in/'

  books_data: any
  search_data :any
  constructor(
    private router: Router,
    private _crud: CrudService
  ) {

  }

  ngOnInit(): void {
    this._crud.get_books().subscribe(
      (res: any) => {
        console.log(res);
        this.books_data = res
        this.search_data =  res
      }
    )
  }

  base_url = "https://www.africau.edu/images/default/sample.pdf"
  base_url2 = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  base_url3 = "https://www.orimi.com/pdf-test.pdf"

  onSearch(e: any) {
    console.log(e);

    this.books_data = this.search_data.filter((item: any) => {
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
    this.router.navigate(['/singalbook'], data.id)
    this._crud.book_.next(data)
  }

}
