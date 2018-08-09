import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// RUTAS!!!
import { APP_ROUTES } from './app.routes';

// MODULOS!!!

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// SERVICIOS!!!
// ESTAN IMPORTADOS EN MODULOS
// COMPONENTES!!
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/login/register.component';




// Shared Compartidos



// rutas


import { HeaderComponent } from './shared/header/header.component';
import { PageComponent } from './Pages/page.component';
import { PageModule } from './Pages/page.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    PageModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
