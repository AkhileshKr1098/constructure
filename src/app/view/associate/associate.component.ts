import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {

   
  config: SwiperOptions = {
   
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },

    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 25
      },
      600: {
          slidesPerView: 2,
          spaceBetween: 25
      },
      991: {
          slidesPerView: 3,
          spaceBetween: 25
      },
      1240: {
          slidesPerView: 4,
          spaceBetween: 25
      },
     
  },
  };


  ngOnInit(): void {

  }
  onSwiper([swiper] : any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}

