import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_Comp/home/home.component';
import { AccountComponent } from './_Comp/account/account.component';
import { LoginComponent } from './_Comp/login/login.component';
import { RegisterComponent } from './_Comp/register/register.component';
import { LocalisationComponent } from './_Comp/localisation/localisation.component';
import { ConditionComponent } from './_Comp/condition/condition.component';
import { CarteComponent } from './_Comp/carte/carte.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'account', component: AccountComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'localisation', component: LocalisationComponent},
  {path:'condition', component: ConditionComponent},
  {path:'carte', component: CarteComponent},
  // Keep the path below,in last position.
  {path:'**', component: CarteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
