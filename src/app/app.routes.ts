import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { RegisterComponent } from './components/register/register.component';
import { PricingComponent } from './components/pricing/pricing.component';

export const routes: Routes = [

    { path: "", redirectTo: "Home", pathMatch: "full" },
    {
        path: 'login',
        component: LoginPageComponent

    },
    {
        path: 'Register',
        component: RegisterComponent

    },
    {
        path: 'Pricing',
        component: PricingComponent

    },
    {
        path: 'Home',
        component: HomePageComponent

    },
    {
        path: 'Result',
        component: ResultPageComponent,

    },
    {
        path: 'CreateForm',
        component: CreateFormComponent,

    }

];
