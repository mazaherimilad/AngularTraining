import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersUpdateComponent } from './users/users-update/users-update.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'users', component: UsersListComponent },
  { path: 'update/:id', component: UsersUpdateComponent },
  { path: 'details/:id', component: UsersDetailsComponent },
  {path:'admin',
  canActivate:[AuthGuard ]
  ,loadChildren:()=>
  import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'**', component:NotFoundComponent},
  {path:'user'
  ,loadChildren:()=>
  import('./modules/admin/components/user/user.module').then((m)=>m.UserModule),
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
