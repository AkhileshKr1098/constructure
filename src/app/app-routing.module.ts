import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './view/header/header.component';
import { AboutComponent } from './view/about/about.component';
import { ViewportComponent } from './view/viewport/viewport.component';
import { ContactComponent } from './view/contact/contact.component';
import { ServiesComponent } from './view/servies/servies.component';
import { BooksComponent } from './view/books/books.component';
import { SingalBookComponent } from './view/singal-book/singal-book.component';
import { AddToCartComponent } from './view/add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { ProfilePageComponent } from './view/profile-page/profile-page.component';
import { ProjectComponent } from './view/project/project.component';
import { OurTeamComponent } from './view/our-team/our-team.component';
import { MissionComponent } from './view/mission/mission.component';
import { VisionComponent } from './view/vision/vision.component';
import { TandCComponent } from './view/tand-c/tand-c.component';
import { ProjectPageComponent } from './view/project-page/project-page.component';
import { CareersComponent } from './view/careers/careers.component';
import { CareersDescComponent } from './view/careers-desc/careers-desc.component';
import { CareersFormComponent } from './view/careers-form/careers-form.component';
import { ProjectDescComponent } from './view/project-desc/project-desc.component';
import { PrivicePoliceComponent } from './view/privice-police/privice-police.component';
import { OrganizationChartComponent } from './view/organization-chart/organization-chart.component';
import { AssociateComponent } from './view/associate/associate.component';
import { ProjectDescPageComponent } from './view/project-desc-page/project-desc-page.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      { path: '', component: ViewportComponent },
      { path: 'home', component: ViewportComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'servies', component: ServiesComponent },
      { path: 'books', component: BooksComponent },
      { path: 'singalbook', component: SingalBookComponent },
      { path: 'addtocart', component: AddToCartComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'ourteam', component: OurTeamComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'vision', component: VisionComponent },
      { path: 'tandc', component: TandCComponent },
      {path: 'projectPage', component :  ProjectPageComponent},
      {path : 'careers', component : CareersComponent},
      {path : 'careersDesc', component : CareersDescComponent},
      {path : 'careersForm', component : CareersFormComponent},
      {path : 'projectdesc', component : ProjectDescComponent},
      {path : 'privicePolices', component : PrivicePoliceComponent},
      {path : 'organizationChart', component : OrganizationChartComponent},
      {path : 'associate', component : AssociateComponent},
      {path  :  'ProjectDescPage',component :  ProjectDescPageComponent},
      {path  :  'design',component :  DesignComponent}
    ]
  },

   { path: 'login', component: LoginComponent },
   { path: 'profile', component: ProfilePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
