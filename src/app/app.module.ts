import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CgvComponent } from './_Comp/condition/cgv/cgv.component';
import { CookieComponent } from './_Comp/condition/cookie/cookie.component';
import { ConditionComponent } from './_Comp/condition/condition.component';
import { CarteComponent } from './_Comp/carte/carte.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { InfosComponent } from './_Comp/carte/plat/infos/infos.component';
import { AdminNavComponent } from './_Comp/admin-nav/admin-nav.component';
import { GestionCarteComponent } from './_Comp/gestion-carte/gestion-carte.component';
import { GestionCommandesComponent } from './_Comp/gestion-commandes/gestion-commandes.component';
import { AddPlatComponent } from './_Comp/gestion-carte/add-plat/add-plat.component';
import { StripeComponent } from './_Comp/stripe/stripe.component';
import { NgxStripeModule } from 'ngx-stripe';
import { EditComponent } from './_Comp/carte/plat/edit/edit.component'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

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
    CarteComponent,
    SearchPipe,
    CgvComponent,
    CookieComponent,
    InfosComponent,
    AdminNavComponent,
    GestionCarteComponent,
    GestionCommandesComponent,
    AddPlatComponent,
    EditComponent,
    StripeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxStripeModule.forRoot('pk_test_8oCjqa6VglrI9rZU9JlPvhKp'),
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
