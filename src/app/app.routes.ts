import {Routes , RouterModule} from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/login/register.component';
import { PageComponent } from './Pages/page.component';
import { InicioComponent } from './Pages/inicio/inicio.component';


const appRoutes: Routes = [


  {path: '**', component: PageComponent},

];

export const APP_ROUTES =  RouterModule.forRoot(appRoutes, { useHash: true});
