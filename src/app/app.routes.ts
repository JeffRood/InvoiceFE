import {Routes , RouterModule} from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/login/register.component';
import { PageComponent } from './Pages/page.component';


const appRoutes: Routes = [

   {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
   {path: '**', component: LoginComponent}

];

export const APP_ROUTES =  RouterModule.forRoot(appRoutes, { useHash: true});
