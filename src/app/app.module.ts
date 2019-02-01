import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_CFixe/header/header.component';
import { NavbarComponent } from './_CFixe/navbar/navbar.component';
import { FooterComponent } from './_CFixe/footer/footer.component';
import { PanierComponent } from './_CFixe/panier/panier.component';
import { HomeComponent } from './_Comp/home/home.component';
import { LoginComponent } from './_Comp/login/login.component';
import { RegisterComponent } from './_Comp/register/register.component';
import { LocalisationComponent } from './_Comp/localisation/localisation.component';
import { AccountComponent } from './_Comp/account/account.component';
import { ConditionComponent } from './_Comp/condition/condition.component';
import { CarteComponent } from './_Comp/carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PanierComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LocalisationComponent,
    AccountComponent,
    ConditionComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
