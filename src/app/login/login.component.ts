import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../view/servies/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit, OnInit {
  reg_form !: FormGroup
  login_form !: FormGroup
  isRightPanelActive: boolean = false;
  togalBtn :  string = ''
  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // for login from 
    this.login_form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })

    this.reg_form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile_no: ['', Validators.required],
      password: ['', Validators.required]
    })

  }


  ngAfterViewInit() {

  }

  SignUp() {
    const regfrom = new FormData()
    regfrom.append('name', this.reg_form.get('name')?.value)
    regfrom.append('email', this.reg_form.get('email')?.value)
    regfrom.append('mobile_no', this.reg_form.get('mobile_no')?.value)
    regfrom.append('password', this.reg_form.get('password')?.value)
    this._crud.reg(regfrom).subscribe(
      (res: any) => {
        console.log(res);

      }
    )
    console.log(this.reg_form.value);

  }

  sign_in() {
    console.log(this.login_form.value);

    const loginform = new FormData()
    loginform.append('username', this.login_form.get('username')?.value)
    loginform.append('password', this.login_form.get('password')?.value)
    this._crud.Login(loginform).subscribe(
      (res: any) => {
        console.log(res);
        if (res.success != true) {
          return alert("Fail ..!")
        } else {
          alert("Login Success")
          if (res.parameter == 'admin') {
            window.open('https://admin.constipationmedicine.in', '_self');
          } else {
            this.router.navigate(['/'])
            const login_data =  {
                username: `${res.parameter}`,
                name: `${res.adminName}`
              }
            
            localStorage.setItem('user', JSON.stringify(login_data))
          }

        }
      }
    )

  }

  onSignUpClick() {
    this.isRightPanelActive = !this.isRightPanelActive;
  }

  onSignUpInClick() {
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}

