import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { SliderComponent } from './view/slider/slider.component';
import { ContentComponent } from './view/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './view/about/about.component';
import { ViewportComponent } from './view/viewport/viewport.component';
import { CardSliderComponent } from './view/card-slider/card-slider.component';
import { ContactComponent } from './view/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ServiesComponent } from './view/servies/servies.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BooksComponent } from './view/books/books.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SingalBookComponent } from './view/singal-book/singal-book.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AddToCartComponent } from './view/add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './view/profile-page/profile-page.component';
import { HomeContentComponent } from './view/home-content/home-content.component';
import { ProjectComponent } from './view/project/project.component';
import { OurTeamComponent } from './view/our-team/our-team.component';
import { MissionComponent } from './view/mission/mission.component';
import { VisionComponent } from './view/vision/vision.component';
import { TandCComponent } from './view/tand-c/tand-c.component';
import { ProjectPageComponent } from './view/project-page/project-page.component';
import { CareersComponent } from './view/careers/careers.component';
import { CareersDescComponent } from './view/careers-desc/careers-desc.component';
import { ProjectDescComponent } from './view/project-desc/project-desc.component';
import { PrivicePoliceComponent } from './view/privice-police/privice-police.component';
import { AssociateComponent } from './view/associate/associate.component';
import { OrganizationChartComponent } from './view/organization-chart/organization-chart.component';
import { SwiperModule } from 'swiper/angular';
import { ProjectDescPageComponent } from './view/project-desc-page/project-desc-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DesignComponent } from './design/design.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ContentComponent,
    AboutComponent,
    ViewportComponent,
    CardSliderComponent,
    ContactComponent,
    ServiesComponent,
    BooksComponent,
    SingalBookComponent,
    AddToCartComponent,
    LoginComponent,
    HomepageComponent,
    ProfilePageComponent,
    HomeContentComponent,
    ProjectComponent,
    OurTeamComponent,
    MissionComponent,
    VisionComponent,
    TandCComponent,
    ProjectPageComponent,
    CareersComponent,
    CareersDescComponent,
    ProjectDescComponent,
    PrivicePoliceComponent,
    AssociateComponent,
    OrganizationChartComponent,
    ProjectDescPageComponent,
    DesignComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSidenavModule,
    BrowserModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    NgxImageZoomModule,
    ReactiveFormsModule,
    MatIconModule,
    SwiperModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
     MatInputModule, 
     MatTableModule,
      MatSortModule, 
      MatPaginatorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
