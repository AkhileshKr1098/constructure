import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginas: any
  login_data: any
  isLogin: boolean = false
  opened: boolean = false

  ngOnInit(): void {
    this.loginas = localStorage.getItem('user')
    this.login_data = JSON.parse(this.loginas)
    console.log(this.login_data);
    if(this.login_data.name != ''){
      this.isLogin = true
    }else{
      this.isLogin = false
    }
    
  }

  onTogale(e: any) {
    console.log(e);


  }
}
