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
      path: 'register',
      pathMatch: 'full',
      loadComponent: () =>
        import('./TallerClienteWeb/pages/register-page/register-page.component').then(
          (m) => m.RegisterPageComponent
        ),
    },
    {
      path: 'productos',
      loadComponent: () =>
        import('./TallerClienteWeb/pages/products-page/products-page.component').then(
          (m) => m.ProductsPageComponent
        )
    },
    {
      path: 'main',
      pathMatch: 'full',
      loadComponent: () =>
        import('./TallerClienteWeb/pages/main-page/main-page.component').then(
          (m) => m.MainPageComponent
        )
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'home'
    }
];
