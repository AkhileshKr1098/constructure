import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url =  'https://admin.constipationmedicine.in/'

  base_url =  'https://admin.constipationmedicine.in/api/'

  constructor(
    private  http :  HttpClient
  ) { 
    this.get_project_card()
  }
  book_ = new BehaviorSubject<any>('');
  no_of_addtocart = new BehaviorSubject<any>({});
  card_project  =  new BehaviorSubject<any>({}) ; 
  projectDescPageData  =  new BehaviorSubject<any>({}) ; 
  project_cards  =  new BehaviorSubject<any>([]) ; 
  carrear_data  =  new BehaviorSubject<any>({}) ; 



  get_books(){
    return  this.http.get(`${this.base_url}ConWeb`)
  }

  get_project_card(){
     this.http.get(`${this.base_url}GetProjectApi`).subscribe((res:any)=>{
      // console.log(res);
      this.project_cards.next(res)
      return res
     })
  }

  reg(data:any){
    return  this.http.post(`${this.base_url}LoginApi/1`,data)
  }  

  Login(data:any){
    return  this.http.post(`${this.base_url}LoginApi`,data)
  }  

  add_to_cart(data:any){
    return  this.http.post(`${this.base_url}AddCartApi`,data)
  }  
  get_add_to_cart(){
    return  this.http.get(`${this.base_url}AddCartApi`)
  }  

  del_add_to_cart(id:any){
    return  this.http.post(`${this.base_url}AddCartApi?id=${id}&str='delete'`, id)
  }
  
  get_project(){
    return  this.http.get(`${this.base_url}GetProjectApi`)
  }

  get_design(){
    return  this.http.get(`${this.base_url}Design`)
  }
  get_team(){
    return  this.http.get(`${this.base_url}Team`)
  }

  get_career(){
    return  this.http.get(`${this.base_url}Career`)
  }

  post_career(data:any){
    return  this.http.post(`${this.base_url}Career`, data)
  }

}
