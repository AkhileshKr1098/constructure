import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.http.get('https://admin.constipationmedicine.in/api/GetProjectApi/').subscribe(
      (res: any) => {
        // console.log(res);
        const data = res.map(project => {
          const { Category_Id,
            ...rest } = project;
          return rest;
        });

        localStorage.setItem('card', JSON.stringify(data))
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
  ngOnInit(): void {
    //  if(this.router.url == '/' || this.router.url == '/home'){
    //     alert(this.router.url)
    //  }

  }
  title = 'constructure';


}
