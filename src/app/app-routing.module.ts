import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_Comp/home/home.component';
import { AccountComponent } from './_Comp/account/account.component';
import { LoginComponent } from './_Comp/login/login.component';
import { RegisterComponent } from './_Comp/register/register.component';
import { LocalisationComponent } from './_Comp/localisation/localisation.component';
import { ConditionComponent } from './_Comp/condition/condition.component';
import { CarteComponent } from './_Comp/carte/carte.component';
import { CgvComponent } from './_Comp/condition/cgv/cgv.component';
import { CookieComponent } from './_Comp/condition/cookie/cookie.component';
import { InfosComponent } from './_Comp/carte/plat/infos/infos.component';
import { GestionCarteComponent } from './_Comp/gestion-carte/gestion-carte.component';
import { GestionCommandesComponent } from './_Comp/gestion-commandes/gestion-commandes.component';
import { AddPlatComponent } from './_Comp/gestion-carte/add-plat/add-plat.component';
import { EditComponent } from './_Comp/carte/plat/edit/edit.component';
import { StripeComponent } from './_Comp/stripe/stripe.component';
import { AddCatComponent } from './_Comp/gestion-carte/add-cat/add-cat.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'localisation', component: LocalisationComponent },
  { path: 'condition', component: ConditionComponent },
  { path: 'cgv', component: CgvComponent },
  { path: 'cookie', component: CookieComponent },
  { path: 'menu', component: CarteComponent },
  { path: 'menu/:categorie', component: CarteComponent },
  { path: 'info/:key', component: InfosComponent },
  { path: 'edition/:key', component: EditComponent },
  { path: 'gcarte', component: GestionCarteComponent },
  { path: 'gcom', component: GestionCommandesComponent },
  { path: 'add', component: AddPlatComponent },
  { path: 'addcat', component: AddCatComponent },
  { path: 'payment', component: StripeComponent },
  // Keep the path below,in last position.
  { path: '**', component: CarteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
