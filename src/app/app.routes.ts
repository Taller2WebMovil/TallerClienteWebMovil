import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => import('./TallerClienteWeb/pages/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => import('./TallerClienteWeb/pages/login-page/login-page.component').then(m => m.LoginPageComponent)
      },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
