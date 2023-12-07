import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-singal-book',
  templateUrl: './singal-book.component.html',
  styleUrls: ['./singal-book.component.css']
})
export class SingalBookComponent implements OnInit {
  selectedRating = 0;
  login_status: boolean = true
  qty :any = 1
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  book_data: any
  url = 'https://admin.constipationmedicine.in/'
  loginas:any
  login_data:any
  constructor(
    private router: Router,
    private _crud: CrudService
  ) {
    // this.book_id =  this.router.getCurrentNavigation()?.extras
  }

  ngOnInit(): void {
    
    this._crud.book_.subscribe(
      (res: any) => {
        this.book_data = res
        console.log(this.book_data);
      }
    )

    this.loginas = localStorage.getItem('user')
    this.login_data = JSON.parse(this.loginas)
    console.log(this.login_data);
  }


  AddToCard(){
    // for form data  
    const formdata = new FormData()
    // formdata.append('user_id', this.login_data.user_id);
    formdata.append('user_id', '1');
    formdata.append('book_category', this.book_data.Bcname);
    formdata.append('book_cover_page', this.book_data.BookImage);
    formdata.append('book_title', this.book_data.BookTitle);
    formdata.append('discount', this.book_data.Discount);
    formdata.append('final_price', this.book_data.FinalPrice);
    formdata.append('qty', this.qty)
    formdata.append('book_id', this.book_data.BookId )

    this._crud.add_to_cart(formdata).subscribe(
      (res:any)=>{
        console.log(res);
        this.router.navigate(['/addtocart'])

      }
    )

  }


  selectStar(value: any): void {

    // prevent multiple selection
    if (this.selectedRating === 0) {

      this.stars.filter((star) => {

        if (star.id <= value) {

          star.class = 'star-gold star';

        } else {

          star.class = 'star-gray star';

        }

        return star;
      });

    }

    this.selectedRating = value;

  }


  

}
