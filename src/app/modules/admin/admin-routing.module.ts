import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from 'src/app/components/forget-password/forget-password.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { JWTComponent } from './components/jwt/jwt.component';
import { ServicesComponent } from './components/services/services.component';
import { ProvinceComponent } from './components/province/province.component';


const routes: Routes = [{
  path: '', component: AdminDashboardComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {path: 'user', component: UserComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
    { path: 'JWT', component: JWTComponent },
    {path: 'province', component:ProvinceComponent },

    { path: '', redirectTo: '/admin/home', pathMatch: 'full' },




  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
