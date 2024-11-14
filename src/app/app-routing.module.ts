import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogingComponent } from './bloging/bloging.component';
import { AllCouseComponent } from './all-couse/all-couse.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'bloging',component:BlogingComponent},
  {path:'all-course',component:AllCouseComponent},
  {path:'pages',component:PagesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
