import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servies/crud.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit, AfterViewInit {
  loginas: any
  login_data: any
  qty: any = 1
  book_id: any = 0
  cart_data: any
  url: string = 'https://admin.constipationmedicine.in/'
  total_amount = 0
  total_discount = 0
  TAX = 14.5

  displayedColumns: string[] = ['id', 'book_cover_page', 'book_title', 'final_price' , 'action'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(
    private _crud: CrudService
  ) {
    this.dataSource = new MatTableDataSource();

  }
 

  ngOnInit(): void {
    this.loginas = localStorage.getItem('user')
    this.login_data = JSON.parse(this.loginas)
    this.get_data()   
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }


  get_data() {
    this._crud.get_add_to_cart().subscribe(
      (res: any) => {
        console.log(res);
        this.total_amount = res.reduce((sum: any, item: any) => sum + item.final_price)
        this.total_discount = res.reduce((sum: any, item: any) => sum + item.discount)
        this.dataSource = res.reverse()
      
        // this.dataSource.paginator.data =  this.paginator
      }
    )
  }

  // for delete add to cart 

  del(id: any) {
    this._crud.del_add_to_cart(id).subscribe(
      (res: any) => {
        console.log(res);
        if (res == 'success') {
          alert(res)
          this.get_data()
        }
      }
    )
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}
