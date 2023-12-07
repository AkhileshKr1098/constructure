import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  SearchToggal: boolean =  false
  control = new FormControl('');
  streets: string[] = ['home','About','Team', 'Servies', 'Books','Project' , 'Design', 'Contact', 'Terms and Conditions'];
  filteredStreets: Observable<string[]> | undefined;
  constructor(
    private  route:Router,
    private _crud :  CrudService
  ){
    
  }
  ngDoCheck(){
    if(this.route.url == '/'){
        this.SearchToggal =  false
    }else{
      this.SearchToggal =  true
    }
    
    if(window.innerWidth < 900){
      this.SearchToggal =  true
    }

  }

  onMenuToggal: boolean = true
  style1: boolean = false

  ngOnInit(): void {
    window.scroll(0,0)
    if (window.innerWidth < 900) {
      this.style1 = false

    } else {
      this.style1 = true
    }


    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    
  }

 
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    const tem_data =  this.streets.filter(street => this._normalizeValue(street).includes(filterValue))
      // console.log(tem_data[0]);
      
   this.onPageScorll(tem_data[0])
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
    
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }




 

  onMenu() {
    if (this.onMenuToggal == true) {
      this.onMenuToggal = false
    } else {
      this.onMenuToggal = true
    }
  }

  onSubMenu() {
    if (this.style1 == true) {
      this.style1 = false
    } else {
      this.style1 = true
    }
  }

  onClose() {
    if (window.innerWidth < 900) {
      if (this.onMenuToggal == true) {
        this.onMenuToggal = false
      } else {
        this.onMenuToggal = true
      }
    } 
    
  }


  onPageScorll(data){
    console.log(data);
        
      switch (data) {
        case 'About':
          window.scroll(0,800)
          break;
        case 'Servies':
          window.scroll(0, 1600)
          break;
        case 'Project':
          window.scroll(0, 3200)
          break;
          case 'Books':
          window.scroll(0, 3700)
          break ; 
          case 'Design':
          window.scroll(0, 4300)
          break ; 

          case 'Team':
          window.scroll(0, 4900)
          break ; 
          case 'Terms and Conditions':
          window.scroll(0, 5400)
          break ; 
          case 'Contact':
          window.scroll(0, 6100)
          break ; 
          case '':
          window.scroll(0,0)
          break ; 
        default:
          window.scroll(0,0)
          break;
      }
  }
}

